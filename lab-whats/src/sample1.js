"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config = {
    url: "/user",
    method: "get",
    baseURL: "https://api.example.com/",
    transformRequest: function (data) { return '{"foo":"bar"}'; },
    transformResponse: [function (data) { return ({ baz: "qux" }); }],
    headers: { "X-FOO": "bar" },
    params: { id: 12345 },
    paramsSerializer: function (params) { return "id=12345"; },
    data: { foo: "bar" },
    timeout: 10000,
    withCredentials: true,
    auth: {
        username: "janedoe",
        password: "s00pers3cret"
    },
    responseType: "json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    onUploadProgress: function (progressEvent) { },
    onDownloadProgress: function (progressEvent) { },
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: function (status) { return status >= 200 && status < 300; },
    maxRedirects: 5,
    proxy: {
        host: "127.0.0.1",
        port: 9000
    },
    cancelToken: new axios_1["default"].CancelToken(function (cancel) { })
};
var nullValidateStatusConfig = {
    validateStatus: null
};
var undefinedValidateStatusConfig = {
    validateStatus: undefined
};
var handleResponse = function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
};
var handleError = function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    else {
        console.log(error.message);
    }
};
axios_1["default"](config).then(handleResponse)["catch"](handleError);
axios_1["default"].get("/user?id=12345").then(handleResponse)["catch"](handleError);
axios_1["default"]
    .get("/user", { params: { id: 12345 } })
    .then(handleResponse)["catch"](handleError);
axios_1["default"].head("/user").then(handleResponse)["catch"](handleError);
axios_1["default"].options("/user").then(handleResponse)["catch"](handleError);
axios_1["default"]["delete"]("/user").then(handleResponse)["catch"](handleError);
axios_1["default"].post("/user", { foo: "bar" }).then(handleResponse)["catch"](handleError);
axios_1["default"]
    .post("/user", { foo: "bar" }, { headers: { "X-FOO": "bar" } })
    .then(handleResponse)["catch"](handleError);
axios_1["default"].put("/user", { foo: "bar" }).then(handleResponse)["catch"](handleError);
axios_1["default"].patch("/user", { foo: "bar" }).then(handleResponse)["catch"](handleError);
// with default AxiosResponse<T> result
var handleUserResponse = function (response) {
    console.log(response.data.id);
    console.log(response.data.name);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
};
axios_1["default"].get("/user?id=12345").then(handleUserResponse)["catch"](handleError);
axios_1["default"]
    .get("/user", { params: { id: 12345 } })
    .then(handleUserResponse)["catch"](handleError);
axios_1["default"].head("/user").then(handleUserResponse)["catch"](handleError);
axios_1["default"].options("/user").then(handleUserResponse)["catch"](handleError);
axios_1["default"]["delete"]("/user").then(handleUserResponse)["catch"](handleError);
axios_1["default"]
    .post("/user", { foo: "bar" })
    .then(handleUserResponse)["catch"](handleError);
axios_1["default"]
    .post("/user", { foo: "bar" }, { headers: { "X-FOO": "bar" } })
    .then(handleUserResponse)["catch"](handleError);
axios_1["default"]
    .put("/user", { foo: "bar" })
    .then(handleUserResponse)["catch"](handleError);
axios_1["default"]
    .patch("/user", { foo: "bar" })
    .then(handleUserResponse)["catch"](handleError);
// (Typed methods) with custom response type
var handleStringResponse = function (response) {
    console.log(response);
};
axios_1["default"]
    .get("/user?id=12345")
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .get("/user", { params: { id: 12345 } })
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"].head("/user").then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .options("/user")
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]["delete"]("/user")
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .post("/user", { foo: "bar" })
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .post("/user", { foo: "bar" }, { headers: { "X-FOO": "bar" } })
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .put("/user", { foo: "bar" })
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .patch("/user", { foo: "bar" })
    .then(handleStringResponse)["catch"](handleError);
axios_1["default"]
    .request({
    method: "get",
    url: "/user?id=12345"
})
    .then(handleStringResponse)["catch"](handleError);
// Instances
var instance1 = axios_1["default"].create();
var instance2 = axios_1["default"].create(config);
instance1(config).then(handleResponse)["catch"](handleError);
instance1.request(config).then(handleResponse)["catch"](handleError);
instance1.get("/user?id=12345").then(handleResponse)["catch"](handleError);
instance1.options("/user").then(handleResponse)["catch"](handleError);
instance1
    .get("/user", { params: { id: 12345 } })
    .then(handleResponse)["catch"](handleError);
instance1.post("/user", { foo: "bar" }).then(handleResponse)["catch"](handleError);
instance1
    .post("/user", { foo: "bar" }, { headers: { "X-FOO": "bar" } })
    .then(handleResponse)["catch"](handleError);
// Defaults
axios_1["default"].defaults.baseURL = "https://api.example.com/";
axios_1["default"].defaults.headers.common["Authorization"] = "token";
axios_1["default"].defaults.headers.post["X-FOO"] = "bar";
axios_1["default"].defaults.timeout = 2500;
instance1.defaults.baseURL = "https://api.example.com/";
instance1.defaults.headers.common["Authorization"] = "token";
instance1.defaults.headers.post["X-FOO"] = "bar";
instance1.defaults.timeout = 2500;
// Interceptors
var requestInterceptorId = axios_1["default"].interceptors.request.use(function (config) { return config; }, function (error) { return Promise.reject(error); });
axios_1["default"].interceptors.request.eject(requestInterceptorId);
axios_1["default"].interceptors.request.use(function (config) { return Promise.resolve(config); }, function (error) { return Promise.reject(error); });
axios_1["default"].interceptors.request.use(function (config) { return config; });
axios_1["default"].interceptors.request.use(function (config) {
    return Promise.resolve(config);
});
var responseInterceptorId = axios_1["default"].interceptors.response.use(function (response) { return response; }, function (error) { return Promise.reject(error); });
axios_1["default"].interceptors.response.eject(responseInterceptorId);
axios_1["default"].interceptors.response.use(function (response) { return Promise.resolve(response); }, function (error) { return Promise.reject(error); });
axios_1["default"].interceptors.response.use(function (response) { return response; });
axios_1["default"].interceptors.response.use(function (response) {
    return Promise.resolve(response);
});
// Adapters
var adapter = function (config) {
    var response = {
        data: { foo: "bar" },
        status: 200,
        statusText: "OK",
        headers: { "X-FOO": "bar" },
        config: config
    };
    return Promise.resolve(response);
};
axios_1["default"].defaults.adapter = adapter;
// axios.all
var promises = [Promise.resolve(1), Promise.resolve(2)];
var promise = axios_1["default"].all(promises);
// axios.spread
var fn1 = function (a, b, c) { return a + "-" + b + "-" + c; };
var fn2 = axios_1["default"].spread(fn1);
// Promises
axios_1["default"]
    .get("/user")
    .then(function (response) { return "foo"; })
    .then(function (value) { });
axios_1["default"]
    .get("/user")
    .then(function (response) { return Promise.resolve("foo"); })
    .then(function (value) { });
axios_1["default"]
    .get("/user")
    .then(function (response) { return "foo"; }, function (error) { return "bar"; })
    .then(function (value) { });
axios_1["default"]
    .get("/user")
    .then(function (response) { return "foo"; }, function (error) { return 123; })
    .then(function (value) { });
axios_1["default"]
    .get("/user")["catch"](function (error) { return "foo"; })
    .then(function (value) { });
axios_1["default"]
    .get("/user")["catch"](function (error) { return Promise.resolve("foo"); })
    .then(function (value) { });
// Cancellation
var source = axios_1["default"].CancelToken.source();
axios_1["default"]
    .get("/user", {
    cancelToken: source.token
})["catch"](function (thrown) {
    if (axios_1["default"].isCancel(thrown)) {
        var cancel = thrown;
        console.log(cancel.message);
    }
});
source.cancel("Operation has been canceled.");
// AxiosError
axios_1["default"].get("/user")["catch"](function (error) {
    if (axios_1["default"].isAxiosError(error)) {
        var axiosError = error;
    }
});
