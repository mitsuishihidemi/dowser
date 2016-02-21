# Runnning

Go to api folder and run:
```
npm start;
```

# Calls

## Insert

```
http://158.85.206.13:8081/DataType/Insert

//jQuery Only for example

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://158.85.206.13:8081/DataType/Insert",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "2ac2e3fc-cd42-eb79-2ada-86749b3db8cf",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "name": "Coco12",
    "kind": "count",
    "userId": "lucas",
    "points[0][date]": "1455365898000",
    "points[0][value]": "100",
    "points[1][date]": "1455365998000",
    "points[1][value]": "200"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

```

## Get User Data Types

```

//End Point
http://158.85.206.13:8081/DataType/GetByUser/lucas

//result
[
  {
    "id": "0127aafe-8fab-497e-95c7-a23b503d47cb",
    "kind": "count",
    "name": "Coco12",
    "userId": "lucas"
  },
  {
    "id": "0127aafe-8fab-497e-95c7-a23b503d47cb",
    "kind": "count",
    "name": "Coco12",
    "userId": "lucas"
  }
]
```

## Get Other Data Types

```

//End Point
http://158.85.206.13:8081/DataType/GetByNotUser/lucas

//result
[
  {
    "id": "0127aafe-8fab-497e-95c7-a23b503d47cb",
    "kind": "count",
    "name": "Coco12"
  },
  {
    "id": "0127aafe-8fab-497e-95c7-a23b503d47cb",
    "kind": "count",
    "name": "Coco12",
    "userId": "manuel"
  }
]
```

## Get Data for a specific Type

```

//End Point
http://158.85.206.13:8081/DataType/Get/8a2cefdf-23a7-40ae-a6ac-209a1c2b0ed0

//result
{
  "id": "8a2cefdf-23a7-40ae-a6ac-209a1c2b0ed0",
  "kind": "count",
  "name": "Coco6",
  "userId": "lucas",
  "points": [
    {
      "dataTypeId": "8a2cefdf-23a7-40ae-a6ac-209a1c2b0ed0",
      "date": "1455365998000",
      "id": "c3584a8f-47c4-469a-b1c4-c6079d896a7d",
      "value": "200"
    },
    {
      "dataTypeId": "8a2cefdf-23a7-40ae-a6ac-209a1c2b0ed0",
      "date": "1455365898000",
      "id": "8c8ce903-b9c7-468b-bfbe-78e8f99ddfad",
      "value": "100"
    }
  ]
}

```


