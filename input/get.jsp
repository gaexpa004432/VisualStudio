<%@ page language="java" contentType="text/html ; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get.jsp</title>
</head>
<body>
    <%
        String user = request.getParameter("user");
        String dept = request.getParameter("department");
    %>
    <table border='2'>
        <tr>
            <th>사용자이름</th>
            <td><%=user%></td>
        </tr>
        <tr>
            <th>부서명</th>
            <td><%=dept%></td>
        </tr>
    </table>
</body>
</html>