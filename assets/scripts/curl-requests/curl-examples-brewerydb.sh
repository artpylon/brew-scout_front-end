# get breweries

curl "http://localhost:4741/beers" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiUyZmFkMGM1MzQ2MDFkZjkyMTlhYzk0YTBlOGE2NjVjNgY6BkVG--c3bf6580cef7f79a561e4cbb63546c103cd1f861" \
--data '{
  "beer": {
  "name": "Zima",
  "brand": "Zima",
  "style": "sucks",
  "alc": 2,
  "price": 2
  }
}'
