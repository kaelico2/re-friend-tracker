export class GuiModel {
 
    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
 
    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */
 
    private _guiModel = {
        "application": {
            "title": "Corinas Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
							"id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
						},
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "data": [ "Study", "Family", "School" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                                                                                   
                    ]
                },
				
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				
				
				{
                    "id": "ActivityForm",
                    "title": "Activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name Actitity",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "name",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				
				
                {
					"id": "GroupForm",
                    "title": "Group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true,
                        },
						{
                            "id": "name",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2,
                            "required": true,
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
							"type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                     ]
                }
            ],
			
			
			
			
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-facebook-square",
                            "color": "magenta",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-home",
                            "color": "peter river",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-gavel",
                            "color": "red",
                            "page": "groupspage",
                        },
						{
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-bath",
                            "color": "silver",
                            "page": "activitypage",
                        },
 
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": 
					[
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-gavel",
                            "color": "alizarin",
                            "form": 
							{
                                "form": "GroupForm"
                            }
                        },
						

                        {
                            "type": "list",
                            "icon": "fa-gavel",
                            "color": "alizarin",
                            "search": true,
                            "data": [ {name: "Study"}, {name: "Family"}, {name: "School"}],
                            "form": 
							{
								"form": "GroupForm"
                            }
                        },
                    ]
                },
				
				
				
				
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-facebook-square",
                            "color": "pink",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-facebook-square",
                            "color": "purple",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendpage"
                        },
                    ]
                },
				
				{
                    "id": "friendpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-facebook-square",
                            "color": "amethyst",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
						 {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-bath",
                            "color": "silver",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-bath",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Schwimmen" }, { name: "Velofahren"} ],
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
				
				{
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-bath",
                            "color": "clouds",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-bath",
                            "color": "clouds",
                            "search": true,
                            "data": [ { name: "Schwimmen" }, { name: "Rennen"}, { name: "Velofahren"} ],
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
				
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "belize hole",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "peter river",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                }
            ]
        }
    };
 
 
    get guiModel() {
        return this._guiModel;
    }
}
