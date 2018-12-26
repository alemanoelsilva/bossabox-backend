FORMAT: 1A

# Tools

This is API for manipulation of Tools

## Tools Collection [/tools/{tag}]

### List all Tools [GET]

+ Parameters
    + tag (string) - tag of tool

+ Response 200
    + Attributes (object)
        + tools (array) - list of tools
            + id (string) - id of tool
            + title (string) - title of tool
            + link (string) - link of tool
            + description (string) - description of tool
            + tags (array) - array of tags
            + createdAt (string) - creation date of tool
        + count (number) - number of tools found out

    + Body

            [
                {
                    "id": "1893d9b7-701d-4415-908a-fb30f97f5bb1",
                    "title": "Notion",
                    "link": "https://notion.so",
                    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                    "tags": [
                        "organization",
                        "planning",
                        "collaboration",
                        "writing",
                        "calendar"
                    ],
                    "createdAt": "2018-12-25T16:22:34.443Z"
                }
            ]
            "count": 1

## Tools Collection [/tools]

### Create Tool [POST]

+ Request
    + Attributes (object)
        + title (string) - title of tool
        + link (string) - link of tool
        + description (string) - description of tool
        + tags (array) - array of tags

    + Body

            {
                "title": "Notion",
                "link": "https://notion.so",
                "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                "tags": [
                    "organization",
                    "planning",
                    "collaboration",
                    "writing",
                    "calendar"
                ],
            }

+ Response 201
    + Attributes (object)
        + id (string) - id of tool
        + title (string) - title of tool
        + link (string) - link of tool
        + description (string) - description of tool
        + tags (array) - array of tags
        + createdAt (string) - creation date of tool

    + Body

            {
                "id": "1893d9b7-701d-4415-908a-fb30f97f5bb1",
                "title": "Notion",
                "link": "https://notion.so",
                "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                "tags": [
                    "organization",
                    "planning",
                    "collaboration",
                    "writing",
                    "calendar"
                ],
                "createdAt": "2018-12-25T16:22:34.443Z"
            }

## Tools Collection [/tools/{id}]

### Delete Tool [DELETE]

+ Parameters
    + id (string) - ID of the Tool in form of an UUID string

+ Response 200
    + Attributes (object)
        + message (string) - message of success

    + Body

            {
                "message": "Tool was deleted with success",
            }
