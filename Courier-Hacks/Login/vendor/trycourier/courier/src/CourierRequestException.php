<?php

namespace Courier;

use Exception;
use Psr\Http\Message\ResponseInterface;


class CourierRequestException extends Exception
{
    /**
     * Get the response payload.
     *
     * @var object|null
     */
    protected $response;

    /**
     * CourierRequestException constructor.
     *
     * @param ResponseInterface $responseInterface
     */
    public function __construct(ResponseInterface $responseInterface)
    {
        $this->response = \json_decode($responseInterface->getBody()->getContents());

        $this->code = $responseInterface->getStatusCode();

        if( \is_object($this->response) ){
            $this->message = $this->response->display_message ?? $responseInterface->getReasonPhrase();
        }

        else {
            $this->message = $responseInterface->getReasonPhrase();
        }
    }

    /**
     * Get the Courier specific error payload.
     *
     * @return object|null
     */
    public function getResponse(): ?object
    {
        return $this->response;
    }
}
