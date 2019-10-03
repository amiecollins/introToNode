const config = {
    uname: "root",
    upass: "root", // windows users leave blank!!
    port: 8889, // 3306 for windows or linux
    host: "localhost",
    db: "bizcard"
}

module.exports = config;

// download and import bizcard database from week 5 authoring's fanshaweonline class content
// import using terminal:
// "/Applications/MAMP/Library/bin/mysql -uroot -proot" /no quotes obvs
// windows may be different, no password for windows -p only
// "create database bizcard;"
// "use bizcard;"
// "source [click & drag file onto command line to paste file location, should look something like /Users/YOURUSERNAME/Downloads/db_card_section_B.sql]"
// this will import the database onto your local server or whatever

// MORE TERMINAL COMMANDS

// "show tables" will show the tables available
// "describe tbl_card[or whatever the table's name is];" will show all the columns of the table and their attributes
