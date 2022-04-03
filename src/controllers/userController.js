const handleClient = (req, res) => {
    return res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
};

export default handleClient;
