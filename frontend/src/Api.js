const API = "http://localhost:5000"


export function getName(someFile, cb) {
    const form = new FormData();
    form.append('selfie', someFile)

    return fetch(API+"/upload", {
        method: 'POST',
        body: form
    }).then((response) => cb(response.text()))
        .catch((error) => {
        return "Something's wrong :( " + JSON.stringify(error)
        })
}