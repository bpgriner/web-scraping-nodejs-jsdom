<h3>Web Scraping w/ NodeJS and jsdom</h3>
April 12, 2014

<i>Tech Needed</i><br>
NodeJS - http://nodejs.org/<br>
npm - http://howtonode.org/introduction-to-npm

To run this app locally, first perform an <code>npm install</code><br>
From here, all you have to do is run <code>node app.js</code>

(<code>npm install</code> will install jsdom in the node_modules sub directory --> jsdom: https://github.com/tmpvar/jsdom)

If the HTML structure of Yahoo!'s PGA Leaderboard hasn't changed, you should see a print out of every golfer and their current score.  If they've missed the cut, their score will be 'MC'.

If the HTML structure has changed, the jQuery selectors will need to be updated appropriately.

http://sports.yahoo.com/golf/pga/leaderboard
