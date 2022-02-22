# Pinoy jokes api 
#### Jokes api made for Filipinos 🤣


### live demo and documentation [https://pinoy-jokes-api.de.r.appspot.com/)


<hr>

# Examples 🤯 : 
### cUrl
```

$ curl https://pinoy-jokes-api.de.r.appspot.com/random

{
"id":299,
"dialect":"tagalog",
"joke":["May joke ako about pizza, Kaso baka di ko ma-deliver"]
}
```

###  python 🐍

```python
import requests 
req = requests.get('https://pinoy-jokes-api.de.r.appspot.com/random').json()
print(req) 

'''
{'id': 319, 'dialect': 'tagalog', 'joke': ['Knock knock', 'Whos there', 'Meatloaf', 'Meatloaf who', 'Sa yong ngiti akoy nahuhu MALING']}
'''

#lets parse the joke 
for joke in req['joke'] : 
  print(joke)
  
'''
Knock knock
Whos there
Meatloaf
Meatloaf who
Sa yong ngiti akoy nahuhu MALING

'''

```

## Run in your local machine 💻🤙

```
- git clone https://github.com/Tmpts21/pinoy-jokes-api.git
- cd pinoy-jokes-api
- npm install 
- node server.js
- Open you browser and go to  http://localhost:8080/
```
