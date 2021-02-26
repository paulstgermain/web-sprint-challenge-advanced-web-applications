# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

    JWTs (JSON Web Tokens) are used primarily for user authentication - when a user signs in to a website or application, usually they are handed a JWT which then lives in their browser's Local Storage and acts as a passport to allow them into protected portions of the website/application at hand.

2. What steps can you take in your web apps to keep your data secure?

    If this question refers to us as developers protecting sensitive data in our applications, we can add this sensitive data (API keys, JWTs, ect) to our .gitIgnore file to ensure that they don't get added to our remote repos.

3. Describe how web servers work.

    After receiving a request for data/files from a client browser/computer, a web server will initially send down the basic HTML/CSS with all relevant scripts linked, very quickly rendering this on the users browser as it makes all necessary requests for potential outside data (Either from an API, another server, ect).

    It then spins this data up, and renders it all in it's cohesive form on the client's browser - and this all happens usually in the blink of an eye!

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C: .post
R: .get
U: .put
D: .delete