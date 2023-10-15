function validateRequest(request) {
  // Check for missing properties
  if (!request.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!request.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!request.hasOwnProperty("version")) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!request.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  // Validate Method
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  if (!validMethods.includes(request.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  // Validate URI
  const uriPattern = /^([a-zA-Z0-9.]+|\*)$/;
  if (!uriPattern.test(request.uri) || request.uri === "") {
    throw new Error("Invalid request header: Invalid URI");
  }

  // Validate Version
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  if (!validVersions.includes(request.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  // Validate Message
  const messagePattern = /^[^<>\\&'"]*$/;
  if (!messagePattern.test(request.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return request;
}
