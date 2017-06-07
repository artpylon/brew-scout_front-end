
#sign-in-json
curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "b@b.com",
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
    "email": "b@b.com",
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
--header "Authorization: Token token=BAhJIiU4YTlkMzEzMzdmNWE0MmRjNTgyZjMxN2NhYWNmNzgxNwY6BkVG--f03424b7678d1ad3d0b9566403b6b3eb0ee098ab" \
--data '{
  "passwords": {
    "new": "secret1",
    "old": "secret"
  }
}'
