<%@ page language="java" contentType="text/html ; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jsp 처리</title>
    </head>
    <body>
        <%
        String name = request.getParameter("username");
        String pass = request.getParameter("pass");
        String gender = request.getParameter("gender");
        String[] hobbies = request.getParameterValues("hobby");
        String subject = request.getParameter("subject");
        String dateOfBirth = request.getParameter("birth");
        int likeit = Integer.parseInt(request.getParameter("likeit"));
    %>
    <table border="1">
        <tr>
            <td>이름</td><td><%=name%></td>
        </tr>
        <tr>
            <td>성별</td><td><%=gender%></td>
        </tr>
        <tr>
            <td>취미</td><td><%for(String hobby : hobbies){%>
                <%=hobby%>&nbsp;
            <% } %></td>
        </tr>
        <tr>
            <td>생일</td><td><%=dateOfBirth%></td>
        </tr>
        <tr>
            <td>likeit</td><td><progress value=<%=likeit%> max="100"></progress><%=likeit%></td>
        </tr>
    </table>
    </body>
    </html>