/**
 * The IP address of the client that just made a request to this application, whether
 * or not the TRUST_PROXY env variable is true and if endpoint accessed through a proxy.
 * @param {Request} request The endpoint Request object
 * @returns The IP address of the client that just made a request
 */
const getRemoteAddress = (request) => {
  let remoteAddress = request.ip;

  if (process.env.TRUST_PROXY && !_.isEmpty(request.ips)) {

    remoteAddress = request.ips[0];
  }

  const defaultIPV6Regex = /^::ffff:((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/g;
  if (remoteAddress.match(defaultIPV6Regex)) {
    remoteAddress = remoteAddress.replace('::ffff:', '');
  }

  return remoteAddress;
};

module.exports = {
  getRemoteAddress,
};
