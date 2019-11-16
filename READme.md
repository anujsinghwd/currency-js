# currency-js

## API Usage

  - features
    - currency conversion

## Currency Js Function

#### Request Parameters
-   `to` 
-   `from`
-   `amt`[Optional]

### Import API
```
    const api = require('currency-js')
```

### convertAmt

```jsx
    api.convertAmt({ to: 'INR', from: 'USD', amt: 247 }, (res) => {
        console.log(res);
    })
```

### Response Format

```json
{
    "date": "2019-10-17",
    "unit_converted_data": {
        "base": "USD",
        "currency": "INR",
        "numeric": 71.2494
    },
    "unit_inverted_data": {
        "base": "INR",
        "currency": "USD",
        "numeric": 0.01404
    },
    "total": {
        "USD": {
            "amt": "247.00"
        },
        "INR": {
            "amt": "17,598.60"
        }
    }
}
```


# Contributing

- Data Fetch From [Exchange-Rates](https://www.exchange-rates.org) unofficialy.

- If the API is not working properly, please open a issue.
        
