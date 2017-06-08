# AUTH

#sign-in-json
curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "ba@ba.com",
    "password": "secret1"}
  }'

#sign-up-json
#curl "http://localhost:3000/sign-up" \
curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "ba@ba.com",
    "password": "secret",
    "password_confirmation": "secret"}
  }'

# data output from curl doesn't have a trailing newline
echo

#change-password-josn
#curl "http://localhost:3000/change-password/${ID}" \
curl "http://localhost:4741/change-password/1" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiVhNjBlNjFiZDQ3N2RhNDM2OTVmMTllNjI5MjY3OGRiMQY6BkVG--4be3c0c0a6f9d29c16179bcb7f16aacfdada36c3" \
--data '{
  "passwords": {
    "new": "secret2",
    "old": "secret1"
  }
}'

# Beer curl

curl "http://localhost:4741/beers" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiVjYWY0YTI1ODcxMTI0YjIyNzhkMzMxZTQ5YTZlMzU1ZgY6BkVG--22bea36da1035f61d32b209231b71e5a888f62bf" \
--data '{
  "user": {
    "id":6,
    "email":"ba@ba.com"},
  "beer": {
  "name": "Zima",
  "brand": "Zima",
  "style": "sucks",
  "alc": 2,
  "price": 2,
  "user_id": 6}
}'

# RAILS COMMANDS
# scaffold beers command:
# bin/rails generate scaffold beer name:string brand:string style:string alc:integer price:integer
# Beer.new( )
