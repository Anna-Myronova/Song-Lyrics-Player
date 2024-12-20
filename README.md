This project is a Node.js application that animates the lyrics of a song in the terminal. Each word appears with custom timing and optional spacing, creating a dynamic and visually appealing effect.  

Compile the TypeScript file to JavaScript: tsc -w  
Run the application: node dist/main.js  

Animation Logic:  
1. Characters of each word are displayed one by one with a customizable duration.  
2. After displaying a word, there can be a pause (set via delayAfterWord).  
3. Spaces between words can be removed if removeSpace is set to true.  

You can modify the animation by changing the song array:  
1. w: The word to display.  
2. duration: Time (in milliseconds) to display each character (default: 70ms).  
3. delayAfterWord: Time to pause after displaying the word (default: 0ms).  
4. removeSpace: Whether to skip adding a space after the word (default: false).  