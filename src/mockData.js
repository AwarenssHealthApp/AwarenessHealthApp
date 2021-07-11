const doctors = {
  "id": null,
  "type": "doctor",
  "attributes": {
    "list": [
      {
        "id": 80,
        "first_name": "gnat",
        "last_name": "Slowpoke",
        "state": "South Dakota",
        "city": "Daphnechester",
        "street": "4493 Marvin Extension",
        "unit": "Suite 249",
        "zip": "19384",
        "phone": "234-456-2244",
        "vetted": true,
        "specialties": [
          {
            "id": 2,
            "name": "Orc",
          },
          {
            "id": 4,
            "name": "Sylvan",
          },
          {
            "id": 1,
            "name": "Undercommon",
          }
        ],
        "insurances": [
          {
            "id": 14,
            "company": "Schinner, Kreiger and Stokes",
          },
          {
            "id": 4,
            "company": "Yundt-Cronin",
          },
          {
            "id": 5,
            "company": "Herman-Bogan",
          }
        ]
      },
      {
        "id": 92,
        "first_name": "reindeer",
        "last_name": "Psyduck",
        "state": "South Dakota",
        "city": "Lake Nickychester",
        "street": "612 Edmundo Burg",
        "unit": "Suite 461",
        "zip": "19384",
        "phone": "234-456-2244",
        "vetted": true,
        "specialties": [
          {
            "id": 8,
            "name": "Deep Speech",
          },
          {
            "id": 1,
            "name": "Undercommon",
          }
        ],
        "insurances": [
          {
            "id": 10,
            "company": "Stamm-Renner",
          },
          {
            "id": 11,
            "company": "Reichel Group",
          }
        ]
      }
    ]
  }
}




const mentalHealthProfessionals = {
  "id": null,
  "type": "mhp",
  "attributes": {
    "list": [
      {
        "id": 62,
        "first_name": "panda",
        "last_name": "Dodrio",
        "state": "Massachusetts",
        "city": "Hamillside",
        "street": "32521 Green Freeway",
        "unit": "Apt. 942",
        "zip": "10385",
        "phone": "234-456-2244",
        "vetted": true,
        "cost": "$123-150",
        "specialties": [
          {
            "id": 3,
            "name": "Celestial",
            "created_at": "2021-07-10T20:44:05.163Z",
            "updated_at": "2021-07-10T20:44:05.163Z"
          },
          {
            "id": 4,
            "name": "Sylvan",
            "created_at": "2021-07-10T20:44:05.168Z",
            "updated_at": "2021-07-10T20:44:05.168Z"
          }
        ],
        "insurances": [
          {
            "id": 8,
            "company": "O'Keefe-Price",
            "created_at": "2021-07-10T20:44:05.097Z",
            "updated_at": "2021-07-10T20:44:05.097Z"
          },
          {
            "id": 9,
            "company": "Conn-Erdman",
            "created_at": "2021-07-10T20:44:05.104Z",
            "updated_at": "2021-07-10T20:44:05.104Z"
          }
        ]
      },
      {
        "id": 141,
        "first_name": "beaver",
        "last_name": "Nidoqueen",
        "state": "Massachusetts",
        "city": "North Nolan",
        "street": "95980 Vandervort Keys",
        "unit": "Suite 347",
        "zip": "10385",
        "phone": "234-456-2244",
        "vetted": true,
        "cost": "$123-150",
        "specialties": [
          {
            "id": 2,
            "name": "Orc",
            "created_at": "2021-07-10T20:44:05.157Z",
            "updated_at": "2021-07-10T20:44:05.157Z"
          },
          {
            "id": 11,
            "name": "Abyssal",
            "created_at": "2021-07-10T20:44:05.208Z",
            "updated_at": "2021-07-10T20:44:05.208Z"
          }
        ],
        "insurances": [
          {
            "id": 12,
            "company": "Lowe, Heathcote and Roob",
            "created_at": "2021-07-10T20:44:05.121Z",
            "updated_at": "2021-07-10T20:44:05.121Z"
          },
          {
            "id": 15,
            "company": "Schinner LLC",
            "created_at": "2021-07-10T20:44:05.139Z",
            "updated_at": "2021-07-10T20:44:05.139Z"
          },
          {
            "id": 14,
            "company": "Schinner, Kreiger and Stokes",
            "created_at": "2021-07-10T20:44:05.134Z",
            "updated_at": "2021-07-10T20:44:05.134Z"
          },
          {
            "id": 5,
            "company": "Herman-Bogan",
            "created_at": "2021-07-10T20:44:05.079Z",
            "updated_at": "2021-07-10T20:44:05.079Z"
          }
        ]
      }
    ]
  }
}

export { doctors, mentalHealthProfessionals }
