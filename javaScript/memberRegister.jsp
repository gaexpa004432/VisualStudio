<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
    String name = request.getParameter("userName");
    String pass = request.getParameter("pass");
    String id = request.getParameter("id");
    String age = request.getParameter("age");
%>
<p><%=name%></p>
<p><%=pass%></p>
<p><%=id%></p>
<p><%=age%></p>
</body>
</html>