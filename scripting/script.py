# Eric Boettner 3/24/18
# script.py
# generates a formatted html template file for boettner-eric/homepage (github)

# See Readme.md for more info and detailed instructions
import os
i = input("type : t p (theme/webpage) - ")
if i == "t":
    name = input("Theme Name               - ")
    x = input("Background Color (hex)   - ")
    y = input("Alt Background Color     - ")
    p = input("Accent Color             - ")
    u = input("Compliment Color         - ")
    i = input("Main Text Color          - ")
    r = input("Subtext Color            - ")
    print("-------------------------------")
    print("function " + name + "() {")
    print("    document.documentElement.style.setProperty('--background', '" + x + "');")
    print("    document.documentElement.style.setProperty('--background-alt', '"+ y + "');")
    print("    document.documentElement.style.setProperty('--base-txt', '"+ i +"');")
    print("    document.documentElement.style.setProperty('--main-cl', '" + p + "');")
    print("    document.documentElement.style.setProperty('--comp-cl', '"+ u +"');")
    print("    document.documentElement.style.setProperty('--sub-txt', '"+ r +"');)")
    print("    setCookie("+ name +")")
    print("}")
    print("-------------------------------")
    print("copy and paste into the keys.js file in the section for themes then add a keyboard shortcut/case for the new theme")
else:
    x = input("mode : s g (single/generate)  -  ")
    # s - generate one tile - for edits/corrections (just copy and paste into html file)
    # g - creates a fully formatted html file with 12 tiles

    if x == "g":
        file_list = os.listdir()
        filename = input("enter filename : ")
        while filename + ".html" in file_list:
            filename = input("enter unique filename : ")
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
        try:
            max = int(tmp)
        except:
            max = 0
        if max > 12:
            max = 12
        num = 1
        while num <= max:
            print("tile : " + str(num))
            link[num] = input("url : ")
            src[num] = input("icon : ")
            name[num] = input("title : ")
            subtitle[num] = input("subtitle : ")
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
                if num == 12:
                    f.write("            </tr>\n")
                else:
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


        f.write("    <div class =\"dropdown\" >\n")
        f.write("       <div class=\"night-content\">\n")
        f.write("           <button id=\"gogh\"> Gogh </button>\n")
        f.write("           <button id=\"discord\"> Discord </button>\n")
        f.write("           <button id=\"vim\"> Vim </button>\n")
        f.write("           <button id=\"neon\"> Neon </button>\n")
        f.write("           <button id=\"rwb\"> RWB </button>\n")
        f.write("           <button id=\"lava\"> Lava </button>\n")
        f.write("           <button id=\"purple\"> Purple </button>\n")
        f.write("       </div>\n")
        f.write("       <button id=\"night\", class=\"night\">\n")
        f.write("           <img src=\"src/mn.png\" style=\'max-width: 30px\'>\n")
        f.write("       </button>\n")
        f.write("   </div>\n")
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
