messages = {};

messages.generalMessage = (res, statuscode, data, state, message) => {
  res.status(statuscode).json({
    ok: state,
    data: data,
    message: message,
  });
};

module.exports = messages;
