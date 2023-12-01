# How to initially set up the program

- first install all important packages by running:
  `npm install`

# How to run:

` npm start`

- this will start running the program using pm2( using clusters so as to improve performance)

# How to send a request

- once the program is running, you can send a `POST` request to the root url "/". But ensure that an image file is attached to the resquest with key value of "image"
- `{image : YOUR IMAGE FILE GOES HERE}`

- For exmple, if the program was running on port 8000 on your local machine, then you would send a post request to `https://localhost:8000/` and with this request, you would attach a request body that contains your `image file` mapped to the key `image`
