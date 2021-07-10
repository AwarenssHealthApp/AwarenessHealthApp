const doctors = [
  {
    "type": "doctors",
    "id": "1",
    "attributes": {
      "first_name": "Jennifer",
      "last_name": "Hyer",
      "street": "790 Delaware St.",
      "unit": "Pavilion C",
      "city": "Denver",
      "state": "CO",
      "zip": "80204",
      "phone": "3034366000",
      "vetted": "false",
      "specialty": [
        "OBGYN, Surgery"
      ],
      "insurance": [
        "Kaiser Permanente"
      ]
    }
  },
  {
    "type": "doctors",
    "id": "2",
    "attributes": {
      "first_name": "Rory",
      "last_name": "Moore",
      "street": "2045 Franklin St",
      "unit": "200",
      "city": "Denver",
      "state": "CO",
      "zip": "80205",
      "phone": "3033384545",
      "vetted": "false",
      "specialty": [
        "OBGYN"
      ],
      "insurance": [
        "Kaiser Permanente",
        "Aetna", "Coventry",
        "Medicare Traditional"
      ]
    }
  },
  {
    "type": "doctors",
    "id": "3",
    "attributes": {
      "first_name": "Anna",
      "last_name": "Wegleitner",
      "street": "950 E Harvard Ave",
      "unit": "200",
      "city": "Denver",
      "state": "CO",
      "zip": "80210",
      "phone": "3036493200",
      "vetted": "false",
      "specialty": [
        "Family Medicine", "WPATH"
      ],
      "insurance": [
        "Kaiser Permanente",
        "Aetna", "Coventry",
        "Medicare Traditional",
        "Anthem", "Blue Cross BlueShield National",
        "Blue Cross and Blue Shield of Nebraska",
        "Bright Health", "Cigna", "Cigna HealthSpring",
        "Colorado Access", "Denver Health", "First Health",
        "Friday Health Plans", "Health First Colorado",
        "Humana", "Medicare Traditional", "Multiplan",
        "Oxford Health Plans", "Rocky Mountain Health Plans",
        "UnitedHealthcare"
      ]
    }
  }
]

const mentalHealthProfessionals = [
  {
    "type": "mental health professionals",
    "id": "1",
    "attributes": {
      "first_name": "Dani",
      "last_name": "Higgins",
      "street": "3003 East 3rd Avenue",
      "unit": "B-106",
      "city": "Denver",
      "state": "CO",
      "zip": "80206",
      "phone": "7206139116",
      "vetted": "false",
      "specialty": [
        "Transgener", "Trauma", "PTSD", "ADHD"
      ],
      "insurance": [
        "Out of Network"
      ],
      "cost": "Sliding scale: $80-120"
    }
  },
  {
    "type": "mental health professionals",
    "id": "2",
    "attributes": {
      "first_name": "Caitlin",
      "last_name": "Flood",
      "street": "Whole Hearted Nest 2305 Canyon",
      "unit": "null",
      "city": "Boulder",
      "state": "CO",
      "zip": "80302",
      "phone": "7209826483",
      "vetted": "false",
      "specialty": [
        "EMDR level 1 and 2", "Trauma Informed", "Queer Informed"
      ],
      "insurance": [
        "Out of Network"
      ],
      "cost": "$150"
    }
  }
]

export { doctors, mentalHealthProfessionals }
