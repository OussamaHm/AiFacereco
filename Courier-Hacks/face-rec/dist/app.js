function usertest(encore) {
    if(encore){
              
        document.getElementById("question").style.visibility = "hidden";
    }
    else{  
           document.getElementById("question").style.visibility = "hidden";         
    }
}

! function(e) {
    var t = {};

    function a(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = { i: n, l: !1, exports: {} };
        return e[n].call(r.exports, r, r.exports, a), r.l = !0, r.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, n) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, a.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) a.d(n, r, function(t) { return e[t] }.bind(null, r));
        return n
    }, a.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(t, "a", t), t }, a.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "", a(a.s = 0)
}([function(e, t, a) { a(1), e.exports = a(2) }, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = 180,
        r = 180,
        i = [150, 150, 180, 180],
        o = [.15, .08, .15, .08, .15, .08, .08, .15, .08],
        c = ["non", 0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255],
        u = [
            [0, 0, r / 3 + 1, n / 3 + 1],
            [r / 3 - 1, 0, r / 3 + 2, n / 3 + 1],
            [2 * r / 3 - 1, 0, r + 1, n / 3 + 1],
            [0, n / 3 - 1, r / 3 + 1, n / 3 + 2],
            [r / 3 - 1, n / 3 - 1, r / 3 + 2, n / 3 + 2],
            [2 * r / 3 - 1, n / 3 - 1, r + 1, n / 3 + 2],
            [0, 2 * n / 3 - 1, r / 3 + 1, n / 3 + 1],
            [r / 3 - 1, 2 * n / 3 - 1, r / 3 + 2, n / 3 + 1],
            [2 * r / 3 - 1, 2 * n / 3 - 1, r + 1, n / 3 + 1]
        ];

    function s(e) { return e < 0 ? 0 : e >= 0 ? 1 : void 0 }

    function l(e, t, a) { return t + a * e }

    function h(e, t) { for (var a = [], n = 0, r = e.length; n < r; n++) e[n].hasOwnProperty(t) && a.push(e[n][t]); return a }

    function f(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var v = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
            var t, a, n;
            return t = e, n = [{ key: "has", value: function() { return !!sessionStorage.length } }, { key: "put", value: function(e, t) { sessionStorage[e] = JSON.stringify(t) } }, { key: "get", value: function(e, t) { return this.has() ? void 0 === t ? JSON.parse(sessionStorage[e]) : JSON.parse(sessionStorage[e])[t] : null } }], (a = null) && f(t.prototype, a), n && f(t, n), e
        }(),
        d = {};

    function g(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t]; return a } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function y(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var m = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
        var t, a, n;
        return t = e, n = [{ key: "getImageData", value: function(e) { for (var t, a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) n[r - 1] = arguments[r]; return 4 === n.length ? (t = e.getContext("2d")).getImageData.apply(t, n) : e.getContext("2d").getImageData(0, 0, e.width, e.height) } }, { key: "rgb2gray", value: function(e) { for (var t = 0, a = e.length; t < a; t += 4) e[t] = e[t + 1] = e[t + 2] = .3 * e[t] + .59 * e[t + 1] + .11 * e[t + 2]; return e } }, { key: "rgbCanvas2grey", value: function(e) { var t = this.getImageData(e); return this.rgb2gray(t.data) } }, { key: "getPixelValue", value: function(e, t, a) { return e.getImageData(t, a, 1, 1).data[0] } }, {
            key: "extract8PointRadius1Feature",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = e.getContext("2d"), n = this.getImageData(e), r = n.data, i = n.data.slice(), o = 1; o < e.height - 1; o++)
                    for (var c = 1, u = 0; c < e.width - 1; c++, u += 4) {
                        var h = 0,
                            f = [],
                            v = 4 * l(e.width, c, o),
                            d = this.getGrayScaleValue(i, v);
                        f[7] = this.getGrayScaleValue(i, 4 * l(e.width, c - t, o - t)) - d, f[6] = this.getGrayScaleValue(i, 4 * l(e.width, c, o - t)) - d, f[5] = this.getGrayScaleValue(i, 4 * l(e.width, c + t, o - t)) - d, f[4] = this.getGrayScaleValue(i, 4 * l(e.width, c + t, o)) - d, f[3] = this.getGrayScaleValue(i, 4 * l(e.width, c + t, o + t)) - d, f[2] = this.getGrayScaleValue(i, 4 * l(e.width, c, o + t)) - d, f[1] = this.getGrayScaleValue(i, 4 * l(e.width, c - t, o + t)) - d, f[0] = this.getGrayScaleValue(i, 4 * l(e.width, c - t, o)) - d;
                        for (var g = 0, y = f.length; g < y; g++) h += s(f[g]) * Math.pow(2, g);
                        r[v] = r[v + 1] = r[v + 2] = h
                    }
                a.clearRect(0, 0, e.width, e.height), a.putImageData(n, 0, 0)
            }
        }, { key: "getGrayScaleValue", value: function(e, t) { return .3 * e[t] + .59 * e[t + 1] + .11 * e[t + 2] } }, { key: "evaluateRecognition", value: function(e) { this.extract8PointRadius1Feature(e); for (var t = { value: 1, name: "Unknown" }, a = [], n = 0, r = u.length; n < r; n++) a = a.concat(h(w.uniformBinary(this.getImageData.apply(this, [e].concat(g(u[n])))), "normalized")); if (this.compareWithData(a, Object.assign({}, v.get("data"), d), "blocks", t), t.value < .05) return t } }, {
            key: "compareWithData",
            value: function(e, t, a, n) {
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var i = w.compareHistogram(e, t[r][a]);
                        i < n.value && (n.name = r, n.value = i)
                    }
            }
        }], (a = null) && y(t.prototype, a), n && y(t, n), e
    }();

    function p(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t]; return a } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function b(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var w = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
        var t, a, n;
        return t = e, n = [{ key: "init", value: function(e) { for (var t = [], a = 0, n = e.length; a < n; a++) t.push({ bin: e[a], frequency: 0, normalized: 0 }); return t } }, {
            key: "uniformBinary",
            value: function(e) {
                for (var t = e.data, a = this.init(c), n = 0, r = t.length; n < r; n += 4) {
                    for (var i = !0, o = 1, u = c.length; o < u; o++)
                        if (c[o] === t[n]) { this.incrementHistogramFrequency(a, o, r), i = !1; break } i && this.incrementHistogramFrequency(a, 0, r)
                }
                return a
            }
        }, { key: "incrementHistogramFrequency", value: function(e, t, a) { e[t].frequency++, e[t].normalized = e[t].frequency / (a / 4) } }, { key: "compareHistogram", value: function(e, t) { return this.weightedChiSquare(e, t) } }, { key: "chiSquare", value: function(e, t) { for (var a = e.length, n = 0, r = 0; r < a; r++) n += Math.pow(e[r] - t[r], 2) / t[r]; return n } }, { key: "weightedChiSquare", value: function(e, t) { for (var a = e.length, n = 0, r = 0, i = 0; r < a; r++) i = Math.floor(r / c.length), n += o[i] * Math.pow(e[r] - t[r], 2) / (e[r] + t[r]); return n } }, { key: "isNormalized", value: function(e, t) { for (var a = 0, n = 0, r = 1; r < e.length; r++) a += e[r].frequency, n += e[r].normalized; return a === t / 4 && 1 === Math.round(n) } }, {
            key: "generateHistogramValue",
            value: function(t, a) {
                var n = {},
                    r = [];
                v.has() && (n = v.get("data"));
                for (var i = 0, o = u.length; i < o; i++) r = r.concat(h(e.uniformBinary(m.getImageData.apply(m, [t].concat(p(u[i])))), "normalized"));
                n[a] = { area: h(this.uniformBinary(m.getImageData(t)), "normalized"), blocks: r }, v.put("data", n)
            }
        }], (a = null) && b(t.prototype, a), n && b(t, n), e
    }();

    function k(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t]; return a } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function x(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var C = function() {
        function e(t, a) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.scaleV = 1, this.scaleH = -1, this.stream = "", this.isActive = !1, this.cameraTimeout = "", this.video = document.createElement("video"), this.canvas = t, this.capturedCanvas = a, this.context = this.canvas.getContext("2d"), this.capturedContext = this.capturedCanvas.getContext("2d") }
        var t, a, n;
        return t = e, (a = [{
                key: "start",
                value: function() {
                    var e = this;
                    void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}), void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function(e) { var t = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; return t ? new Promise((function(a, n) { t.call(navigator, e, a, n) })) : Promise.reject(new Error("getUserMedia is not implemented in this browser")) }), navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia({ video: !0, audio: !1 }).then((function(a) { e.stream = a, "srcObject" in e.video ? e.video.srcObject = a : e.video.src = window.URL.createObjectURL(a), e.video.onloadedmetadata = function() { return e.video.play() }, e.isActive = !0, t() })).catch();
                    var t = function t() { e.flipHorizontal(), e.drawRecognitionFrame(), e.capturedContext.drawImage(e.canvas, 150, 150, 180, 180, 0, 0, e.capturedCanvas.width, e.capturedCanvas.height), e.cameraTimeout = setTimeout(t, 100, e.video, e.context), e.drawOutput(m.evaluateRecognition(e.capturedCanvas)) }
                }
            }, { key: "stop", value: function() { clearTimeout(this.cameraTimeout), this.stream.getTracks()[0].stop(), this.isActive = !1 } }, {
                key: "capture",
                value: function(e) {
                    var t;
                    this.capturedContext.clearRect(0, 0, this.capturedCanvas.width, this.capturedCanvas.height), (t = this.capturedContext).drawImage.apply(t, [this.canvas].concat(k(i), [0, 0, this.capturedCanvas.width, this.capturedCanvas.height])), m.extract8PointRadius1Feature(this.capturedCanvas), w.generateHistogramValue(this.capturedCanvas, e)
                }
            }, {
                key: "flipHorizontal",
                value: function() {
                    var e = (1 === this.scaleH ? 0 : -480) - 80,
                        t = 0 + (1 === this.scaleV ? 0 : -480);
                    this.context.save(), this.context.scale(this.scaleH, this.scaleV), this.context.drawImage(this.video, e, t), this.context.restore()
                }
            }, {
                key: "drawRecognitionFrame",
                value: function() {
                    this.context.beginPath(), this.context.moveTo(i[0], i[1]), this.context.lineTo(i[0] + i[2], i[1]),
                        this.context.lineTo(i[0] + i[2], i[1] + i[3]), this.context.lineTo(i[0], i[1] + i[3]),
                        this.context.lineTo(i[0], i[1]), this.context.stroke(), this.context.closePath()
                }
            },
            {
                key: "drawOutput",
                value: function(e) { var quest = document.getElementById("question"); var pers = document.getElementById("personne"); var cod = document.getElementById("hash").innerHTML; document.getElementById("bottona").href = "dashboard.php?tx="+cod;  
                    void 0 !== e && (this.context.textAlign = "center", this.context.font = "bold 20pt Calibri",
                        this.context.fillStyle = "#ffffff", this.context.fillText("You're", this.canvas.width / 2, this.canvas.height / 2 - 20),
                        this.context.fillText(e.name, this.canvas.width / 2, this.canvas.height / 2 + 20),  quest.style.visibility = "visible", pers.innerHTML = e.name )
                 }
            }
        ]) && x(t.prototype, a), n && x(t, n), e
    }();

    function S(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    
    var I = function() {
        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.canvas = t, this.width = this.canvas.width, this.height = this.canvas.height, this.capturedCanvas = document.getElementById("capturedImage"), this.capturedCanvas.width = r, this.capturedCanvas.height = n, this.webcam = new C(this.canvas, this.capturedCanvas) }
        var t, a, i;
        return t = e, i = [{ key: "createById", value: function(t) { var a = document.getElementById(t); return a.height = 480, a.width = 480, new e(a) } }, { key: "createWithImage", value: function(t, a) { var n = e.createById(t); return n.browseImage(a), n } }], (a = [{ key: "startWebCam", value: function() { return this.webcam.start() } }, { key: "stopWebCam", value: function() { return this.webcam.stop() } }, { key: "capture", value: function(e) { this.webcam.capture(e) } }, {
            key: "browseImage",
            value: function(e) {
                var t = this,
                    a = new Image;
                a.src = e, a.onload = function() {
                    document.getElementById("question").style.visibility = "hidden";
                    var e = r / a.width,
                        i = t.capturedCanvas.getContext("2d");
                    i.clearRect(0, 0, r, n), i.drawImage(a, 0, (n - a.height * e) / 2, r, a.height * e), m.extract8PointRadius1Feature(t.capturedCanvas)
                }
            }
        }, { key: "handleLocalFile", value: function(e) { e.type.match(/image.*/) && this.browseImage(window.URL.createObjectURL(new Blob(e, { type: "application/zip" }))) } }]) && S(t.prototype, a), i && S(t, i), e
    }();
    I.createWithImage("camera", "images/lenna.png");
    var O = I.createById("camera"),
        j = document.querySelector("#webCam .fa");
    document.getElementById("webCam").addEventListener("click", (function() { O.webcam.isActive ? (O.stopWebCam(), j.setAttribute("class", "fa fa-play fa-2x")) : (O.startWebCam(), j.setAttribute("class", "fa fa-pause fa-2x")) })), document.getElementById("capture").addEventListener("click", (function() {
        if (O.webcam.isActive) {
            var e = document.querySelector(".name input");
            O.stopWebCam(), j.setAttribute("class", "fa fa-play fa-2x"), e.style.display = "block", e.onkeydown = function(t) { 13 === t.keyCode && (O.capture(e.value), e.style.display = "none", e.value = "") }
        }
    }))
}, function(e, t) {}]);
//# sourceMappingURL=app.js.map