# Crash Bot
**This is a try to make a Anime Discord Bot.**
**This Bot works right out the box with glitch.com but can be used on other platforms with little changes.**

## Config.json file
| Setting | Default | Description |
| ---------------- | ------------ | ------------ |
| token | "DISCORD_TOKEN" | Discord Bot Token. |
| prefix | "COMMAND PREFIX" | The prefix to start commands. |
| botactivity | | The activity the Bot uses. |
| | "ACTIVITY" | Changes the Bot activity. |
| | "TYPE" | Changes the activity type. |
| | "STATUS" | Changes the status type. |

**Token:**

Get your Discord Token from [Get Token](https://discordapp.com/developers) and put it on a privat server inside the config.json.

If your using a glitch server put the token in the .env like this TOKEN=Your_token.

**Types:**

Avaliable types are PLAYING, STREAMING, LISTENING, WATCHING.

---

## Index.js
**The main file of the bot with all commands and startup references**

* ## Functions
  - **Log**
	+ Logs messages and catches errors.
  - **Caps**
  	+ Capitalizes the first letter of a word.

- ## Events
	+ **Ready**
	  * Logs when the Bot is ready and sets the activity.
	+ **Message**
		* Picks up messages to filter out the prefix and commands to execute and executes them.
	+ **Error**
		* This logs erros such as disconnects and lets it auto reconnect.

- ## Commands
  + **help**
     * Sends a DM embed to the command user and shows all avaliable commands and Infos about them.
  + **user ["Anilist Username"]**
     * Starts a fetch for ["Anilist Username"] and gets the best matching or only matching result. If a Anilist user got found it gets the list and profile informations.
  + **anilist ["Anilist Username"], anilist ["save Anilist Username"], anilist ["@discordname#number Anilist Username"]**
     * Trys to get a saved Anilist for Username.
     * With ["anilist save Anilist name"] saves the found Anilist to your discord ID.
     * With ["anilist @discordname#number"] can be checked what's the anilist from the mentioned user.
   + **waifu ["waifu name"], waifu ["save waifu name"], waifu ["@discordname#number waifu name"]**
     * Trys to get a saved waifu for Username.
     * With ["waifu save name"] gets a matching list of characters to choose from. Saves the found waifu to your discord ID.
     * With ["waifu @discordname#number"] can be checked what's the waifu from the mentioned user.
      + **anime ["Anime Name"]**
     * Starts a search for ["Anime Name"] and gets the 7 best matching results. From these results you can choose the one that matches the one you wanted and displays its details.
  + **manga ["Manga Name"]**
     * Starts a search for ["Manga Name"] and gets the 7 best matching results. From these results you can choose the one that matches the one you wanted and displays its details.
  + **rdmanime**
     * Displays a random anime.
  + **rdmmanga**
     * Displays a random manga.
  + **character [Character Name]**
     * Starts a fetch for ["Character Name"] and gets the best matching results and starts a choose one embed.
  + **staff [Staff Name]**
     * Starts a fetch for ["Staff Name"] and gets the best matching results and starts a choose one embed.
  + **poll [Question]**
     * Starts a Poll with [Question] where everyone in the Channel can vote on it.
  + **p2w [nothing, Anilistname, @mention]**
     * Gets a random Plan 2 Watch Anime from a defined Anilist.
     [p2w] Gets the result of youre registered Anilist without second command. (Needs to be registerd by ["anilist" command])
     [p2w Anilistname] Gets a p2w from ["Anilistname"] and posts it in the Channel.
     [p2w @user] Gets a p2w from ["@user" Anilist if he/she has a registered anilist] and posts it in the Channel.
  + **p2r [nothing, Anilistname, @mention]**
     * Gets a random Plan 2 Read Manga from a defined Anilist.
     Gets the result of youre registered Anilist without second command. (Needs to be registerd by ["anilist" command])
     Gets a p2w from ["Anilistname"] and posts it in the Channel.
     Gets a p2w from ["@user" Anilist if he/she has a registered anilist] and posts it in the Channel.
  + **antibully [-Message -Color1 -Color2]**
     * Creates a Picture with the anti bully ranger.
     Creates a Picture with [-Message] and [-Color1] and [-Color2] where ["Color1"] stands for the Letter Color and ["Color2"] stands for the Letter Border Collor.
  + **antiantibully [-Message -Color1 -Color2]**
     * Create a Picture with the anti anti bully ranger.
     Creates a Picture with [-Message] and [-Color1] and [-Color2] where ["Color1"] stands for the Letter Color and ["Color2"] stands for the Letter Border Collor.
  + **yt [title]**
     * Starts a Youtube Search for ["title"] and gives you a Choise of Nine Videos that got found.

---
			
## Credits

* **Libraries Used**
  - Discord.js: [Website](https://discord.js.org/#/), [Github](https://github.com/discordjs/discord.js)
  - Moment.js: [Website](http://momentjs.com/), [Github](https://github.com/moment/moment/)
  - node-fetch: [Website](https://www.npmjs.com/package/node-fetch/), [Github](https://github.com/bitinn/node-fetch)
  - ms.js: [Website](https://npmjs.com/ms), [Github](https://github.com/zeit/ms)
  - node-canvas.js: [Website](https://www.npmjs.com/package/canvas), [Github](https://github.com/Automattic/node-canvas)

* **Programming**
  - Bandaras213
  - xTobiShotz
