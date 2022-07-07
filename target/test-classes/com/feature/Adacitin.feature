Feature:checking the booking functionality of Adacitin app

@Login
Scenario Outline:Login functionality
Given user Must Launch The Url Of Adacitin
When user Entering The "<username>" In The Username Field
And  user Entering The "<password>" In The Password Field
Then user Click The Login Button And It Navigates To The Search Hotel Page

Examples:
|username|password|
|Darthvader|darklord123|
|Palaptine|darkowner345|
|HarryPotter|45cupboard|
|anivader|N1l@b@nu|

Scenario:Hotel Search functionality
When user Selecting The "London" From HotelLocation DropDown
And user Selecting The "Hotel Creek" From HotelSelection DropDown
And user Selecting The "Super Deluxe" From RoomType DropDown
And user Selecting The "10" From Numbers Of Room  DropDown
And user Selecting The "4" From Adult Per Room DropDown
And user Selecting The "4" From Child Per Room DropDown
Then user Click The search Button And It Navigates To The Select Hotel Page

Scenario:Radio Button Functionality
When user Selecting The Radio Button
Then user Selecting The Continue And It Navigates To The Book A Hotel Page

Scenario:Hotel Book functionality
When user Entering The "Safwan Ali" In The Firstname Field
And  user Entering The "Tajudeen" In The Lastname Field
And  user Entering The "Mr. H.potter, the cupboard under the stairs,4,Private drive,Little Whinging, SURREY,LONDON" In The Billing Address Field
And  user Entering The "1234567898765432" In The Cardnumber Field
And  user Selecting The "VISA" From Cardtype DropDown
And  user Selecting The "12" From ExpiryMonth DropDown
And  user Selecting The "2022" From ExpiryYear DropDown
And  user Entering The "365" In The CVVnumber Field
Then user Click The Booknow Button And It Navigates To The Select Hotel Page

@Logout
Scenario:Logout functionality
Then user Click The Logout Button And It Navigates To The Exit Page



Scenario:ScreenShot functionality
And user TkesScreenshot


