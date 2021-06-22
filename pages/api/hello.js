export default function handler(req, res) {
    const email = req.body.email //The API Route code will not be part of your client bundle, so you can safely write server-side code.
    // Then save email to your database, etc...

    res.status(200).json({ text: 'Hello' })
}