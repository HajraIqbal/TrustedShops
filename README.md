##1   
To execute the tests, follow these steps to set the whole environment: 

PS: In my system Node.js and VS code and Cypress was already installed. but these
steps will explain how I did this. 
1: Install Cypress: npm install cypress
2: Created a new folder in your project's directory with the name 'TRUSTEDSHOPS'
3: Open the Cypress Test Runner: npx cypress open
4: downloaded all the required packages by : npm init -y. 
5: Configure the Cypress for this project and Add the E2E example folder.
6: After that add this automation file into E2E folder. 
7: you can set the width of the page into the cypress.config.js file and also in the script. 
8: In the Cypress Test Runner, click on E2E.spec.js to run the tests.

##2 
I set screen size into the cypress.config.js and also increased the load time because Cypress was giving me error at 60000ms load time when using Electron. 
then used google chrome to run the file and it started working fine.




Question1: 

1. Check if the grade is visible and above zero 
2. Validate that the grade (e.g., 4.81/5.00) is displayed on the page.
3. Ensure that the grade is visible and positioned appropriately.
4. Verify that the grade is above zero and within the expected range.
5. Click on the "Wie berechnet sich die Note?" link.
6. Verify that a new window or a pop-up opens with additional information.
7. Validate that the provided information explains how the grade is calculated accurately.
8. Ensure that the information is relevant and provides clear insights into the grading system.
9. Click on the "2 Stars" filter option.
10. Validate that the reviews displayed are filtered correctly and only show reviews with a two-star rating.
11. Verify that each review in the filtered list indeed has a two-star rating.
12. Calculate the sum of all star percentage values displayed (e.g., sum of 5-star percentage, 4-star percentage, etc.).
13. Verify that the calculated sum is accurate and matches the expected value.
14. Validate that the sum is equal to or below 100, as it should represent the total percentage allocation for all star ratings.

By adding these additional checks, you can ensure that the page title exists, the grade is visible and accurate, the provided information is relevant, the filtering functionality works correctly, and the star percentage values are correctly calculated and within the expected range.



Question 2: 
To enhance the current tests for the review star rating system, we can add the following checks:
1. for first test case we can further check if the latest added reviews are visible and adding the relevent information and updating the percentage of stars
2. we can check after adding more reviews is the yellow line is filling or static
3. check if the review message is deleting and updating.
4. Check if the review star is updateable
5. check if the counting of reviews is updating or not.
6. check if user add new review is it displaying in the first row. (on the first)
7. check if date of adding Review is dynamic
8. check if reviews are showing datewise.
9. Check if reviews pages have pagination or not. (same reviews showing in other pages)
10. check if all the redirecting links are clickable or not
11. Verify if the other details on the profile page (e.g., company information, contact details) are present and correct.
12. verify that the time setting format is changing correctly when page loaded from german to english or english to german.
13. verfiy that the user is able to verify the review report
14. when user is trying to login from review report he can redirect to that page.
15. Verify that the page title is meaningful and accurately represents the content of the page.
16. verify the GUI of the page that all the buttons are clickable and giving expected results
17.  verify that the if the page title is visible and correctly displayed at the top of the page.
18.  Verify that Total amount of reviews are updating when adding or deleting any review.
19.  Verify that star colour filling is changing with the review counting (with 4.5 star should be 4 filled and 1 half filled)
20. Check if the website's GUI is working perfectly fine after localizing the German to English


Question3 : Does the profile page have non-functional properties? How would you test
these properties?

As because it requires profile information . So we can assume that we need to test the performance, security and Accessibility of the page. 

Performance: For performance testing we can used various available tools. Like I used Jmeter with the extension of blazemeter for 
performance testing for one of my previous project.JMeter sends the defined requests to the target server, simulating user actions and generating load.
During the test run, JMeter collects various performance-related metrics, such as response times, throughput, error rates, and resource
utilization.we can use it for Load testing,stress testing and performance testing.there are many other available tools like lighthouse etc.
For accessibility: We can check if the page complies with accessibility guidelines by using tools like Axe, Wave or manually inspecting the HTML markup. we can test the rating system with keyboard navigation (tabbing) and screen readers.
To test security, verify that the page is served over HTTPS and conduct security scans to detect any security issue. we can concern with ethical hackers or professional security tester for that. 
