import validator from "email-validator"

export default async function handler(req, res) {
    // We only want to handle POST requests, everything else gets a 404
    if (req.method === 'POST') {
        await postHandler(req, res);
    } else {
        res.status(404).send("");
    }
}

async function postHandler(req, res) {
    const body = JSON.parse(req.body);
    const email = parseAndValidateEmail(body, res);
    await saveEmail(email);
    res.status(200).send("")
}

async function saveEmail(email) {
    // TODO: what to do here?
    console.log("Got email: " + email)
}

// Make sure we receive a valid email
function parseAndValidateEmail(body, res) {
    if (!body) {
        res.status(400).send("Malformed request");
    }

    const email = body["email"]
    if (!email) {
        res.status(400).send("Missing email");
    } else if (email.length > 300) {
        res.status(400).send("Email is too long");
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid email");
    }

    return email
}