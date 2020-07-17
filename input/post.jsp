<%@ page language="java" contentType="text/html ; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post method</title>
</head>

<body>
    <% 
    String id = request.getParameter("id");
    String pass = request.getParameter("pass");
    out.println("id  "+id+"<br>");
    out.println("pass  "+pass);
    %>
    <form>
        <label for="country_code">Country code:</label>
        <input type="text" id="country_code" name="country_code"
        pattern="[A-Za-z]{3}" title="Three letter country code">
      </form>
      <form>
          <label for="files">Select files:</label>
          <input type="file" id="files" name="files" multiple>
        </form>

</body>

</html>