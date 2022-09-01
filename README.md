# grupoPI5


```HTML
<table>
                    <caption>Tabela de Produtos</caption>

                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ativo</th>
                            <th>Ações</th>

                        </tr>
                    </thead>


                    <tbody>
                        <% products.forEach(product=> { %>
                        <tr>

                                <th>
                                    <%= product.id %>
                                </th>
                                <td><img class="" src="<%= product.image %>" alt="Imagem" width="70px" height="70px">
                                </td>
                                <td>
                                    <%= product.name%>
                                </td>
                                <td>
                                    <%= product.price%>
                                </td>
                                <td>
                                    <%=product.description%>
                                </td>
                                <td>
                                    <%=product.active%>
                                </td>
                                <td>
                                    <a href="" type="button" class="btn btn-primary">Abrir</a>
                                    <a href="" type="button" class="btn btn-secondary">Editar</a>
                                    <button type="submit" class="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                            <% }) %>
                    </tbody>

                </table>
```