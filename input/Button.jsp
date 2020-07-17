<%@ page language="java" contentType="text/html ; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button</title>
</head>
<body>
    <%
        String user = request.getParameter("name");
        String dept = request.getParameter("gender");
    %>
    <table border='2'>
        <tr>
            <th>사용자이름</th>
            <td><%=user%></td>
        </tr>
        <tr>
            <th>성별</th>
            <td><%=dept%></td>
        </tr>
    </table>
</body>
</html>