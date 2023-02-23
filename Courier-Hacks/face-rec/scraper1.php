<?php
require_once 'vendor/autoload.php';
use OpenAI\Api;

$client = OpenAI::client('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');

$result = $client->completions()->create([
    'model' => 'text-davinci-003',
    'prompt' => 'please Summarize terms of service of spotify.com in 10 points, without losing the context, and only show information which may be relevant to the user (please add <br> after each end of line)',
     'max_tokens' => 2000,
]);

echo $result['choices'][0]['text']; // an open-source, widely-used, server-side scripting language.
?>