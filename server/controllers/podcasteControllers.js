

exports.uploadPodcasteContrl = async (req, res) => {
    try {
        res.send({
            name: "Jitesh pandey",
            age: 24
        })
    } catch (error) {
        console.log(error, "<--- error in user data!")
        res.json({ status: 500, message: "Internal server error!" })
    }
} 
