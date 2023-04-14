/***
 * The below status codes are defined by section 10 of RFC 2616.
 */
export enum HttpResponseStatus {
  /***
   * Information Responses
   */
  CONTINUE = 100,
  SWITCHING_PROTOCOL = 101,
  PROCESSING = 102,
  EARLY_HINTS = 103,


  /***
   * Successful Responses
   */
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  ALREADY_REPORTED = 208,
  IM_USED = 226,


  /***
   *  Redirection Messages
   */
  MULTIPLE_CHOICE = 300,
  MOVED_PERMANENTLY = 301,
  /***
   * @deprecated
   * Was previously Moved Temporarily now has been renamed to --> Found
   */
  MOVED_TEMPORARILY = 302,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  /***
   * @deprecated
   */
  USE_PROXY = 305,
  UNUSED = 306,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,


  /***
   * Client Error Responses
   */
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  /***
   * @see Experimental API - rarely used
   */
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUEST = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEA_POT = 418,
  INSUFFICIENT_SPACE_ON_RESOURCE = 419,
  METHOD_FAILURE = 420,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  /***
   * Server Error Responses
   */
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATED = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  NOT_EXTENDED = 509,
  NETWORK_AUTHENTICATION_REQUIRED = 511
}
