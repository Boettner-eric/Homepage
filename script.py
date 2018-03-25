# Eric Boettner 3/24/18
# script.py
# generates a formatted html template file for boettner-eric/homepage (github)

# See Readme.md for more info and detailed instructions

x = input("mode : s g (single/generate)  -  ")
# s - generate one tile - for edits/corrections (just copy and paste into html file)
# g - creates a fully formatted html file with 12 tiles

if x == "g":
    filename = input("enter filename : ")
    print("---------------------")
    num = 1
    f = open(filename + ".html", "w")
    f.write("<!DOCTYPE html>")
    f.write("<html>\n")
    f.write("<head>\n")
    f.write("    <title>"+ filename +"</title>\n")
    f.write("    <meta charset=\"utf-8\">\n")
    f.write("    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n")
    f.write("</head>\n")
    f.write("<body>\n")
    f.write("    <div id=\"grid\">\n")
    f.write("        <table>\n")
    f.write("            <tr>\n")
    link = []
    name = []
    subtitle = []
    src = []
    for i in range(13):
        link.append("")
        name.append("")
        subtitle.append("")
        src.append("")
    tmp = input("number of tiles (max 12) : ")
    max = int(tmp)
    if max > 12:
        max = 12
    num = 1
    while num <= max:
        print("tile : " + str(num))
        link[num] = input("url : ")
        name[num] = input("title : ")
        subtitle[num] = input("subtitle : ")
        src[num] = input("icon : ")
        print("---------------------")
        num += 1
    num = 1
    # Adds All 12 tiles
    while num < 13:
        f.write("                <td>\n")
        f.write("                    <a href= \"" + link[num] + "\" id="+ str(num) + " class=\"lBox\">\n")
        f.write("                        <div class=\"button\">\n")
        f.write("                            <img src=\"src/" + src[num] + ".png\"" + " style=\'max-width: 50px\'>\n")
        f.write("                        </div>\n")
        f.write("                        <h3>" + name[num] + "</h3>\n")
        f.write("                        <p>" + subtitle[num] + "</p>\n")
        f.write("                    </a>\n")
        f.write("                </td>\n")
        if num % 4 == 0:
            f.write("            <tr>\n")
            f.write("            </tr>\n")
        num += 1
    # Adds footer
    f.write("        </table>\n")
    f.write("    </div>\n")
    f.write("<footer>\n")
    f.write("    <form action=\"https://google.com/search\" method=\"get\">\n")
    f.write("         <input type=\"text\" name=\"q\" placeholder=\"[search]\" id=\"search\" autocomplete=\"off\">\n")
    f.write("    </form>\n")
    f.write("    <button id=\"night\", class=\"night\">\n")
    f.write("    	<img src=\"src/mn.png\" style=\'max-width: 30px\'>\n")
    f.write("    </button>\n")
    f.write("</footer>\n")
    f.write("</body>\n")
    f.write("<script type=\"text/javascript\" src=\"keys.js\"></script>\"\n")
    f.write("</html>\n")
    print("File Created")


else:
    num = input("num : ")
    link = input("link : ")
    name = input("name : ")
    subtitle = input("subtitle : ")
    src = input("src : ")
    print("----------------------------------------------\n")
    print("<a href= \"" + link + "\" id="+ num + " class=\"lBox\">")
    print("    <div class=\"button\">")
    print("        <img src=\"src/" + src + ".png\"" + " style=\'max-width: 50px\'>")
    print("    </div>")
    print("    <h3>" + name + "</h3>")
    print("    <p>" + subtitle + "</p>")
    print("</a>")
    print("\n----------------------------------------------\n")
