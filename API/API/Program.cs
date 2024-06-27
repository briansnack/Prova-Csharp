// using System.Collections.Generic;
// using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
// Registrar o serviço de banco de dados
builder.Services.AddDbContext<AppDataContext>();

// Configurar a politica de CORS para liberar o acesso total
builder.Services.AddCors(
    options => options.AddPolicy("Acesso Total", 
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);
builder.Services.AddDbContext<AppDataContext>();

var app = builder.Build();


app.MapGet("/", () => "Prova A1");

//ENDPOINTS DE CATEGORIA
//GET: http://localhost:5000/categoria/listar
app.MapGet("/categoria/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Categorias.Any())
    {
        return Results.Ok(ctx.Categorias.ToList());
    }
    return Results.NotFound("Nenhuma categoria encontrada");
});

//POST: http://localhost:5000/categoria/cadastrar
app.MapPost("/categoria/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Categoria categoria) =>
{
    ctx.Categorias.Add(categoria);
    ctx.SaveChanges();
    return Results.Created("", categoria);
});

//ENDPOINTS DE TAREFA
//GET: http://localhost:5000/tarefas/listar
app.MapGet("/tarefas/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Tarefas.Any())
    {
        return Results.Ok(ctx.Tarefas.ToList());
    }
    return Results.NotFound("Nenhuma tarefa encontrada");
});

//POST: http://localhost:5000/tarefas/cadastrar
app.MapPost("/tarefas/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Tarefa tarefa) =>
{
    Categoria? categoria = ctx.Categorias.Find(tarefa.CategoriaId);
    if (categoria == null)
    {
        return Results.NotFound("Categoria não encontrada");
    }
    tarefa.Categoria = categoria;
    ctx.Tarefas.Add(tarefa);
    ctx.SaveChanges();
    return Results.Created("", tarefa);
});

//PUT: http://localhost:5000/tarefas/alterar/{id}
app.MapPatch("/tarefas/alterar/{id}", ([FromRoute] string id, [FromBody] Tarefa tarefaAlterada,[FromServices] AppDataContext ctx) => {

    Tarefa? tarefa = ctx.Tarefas.Find(id);
    if(tarefa is null){
        return Results.NotFound("Tarefa não encontrada!");
    }
    tarefa.TarefaId = tarefaAlterada.TarefaId;
    tarefa.Status = tarefaAlterada.Status;
    ctx.Tarefas.Update(tarefa);
    ctx.SaveChanges();
    return Results.Ok("Tarefa alterada!");
    }
);
//GET: http://localhost:5000/tarefas/naoconcluidas
app.MapGet("/tarefas/naoconcluidas", ([FromServices] AppDataContext ctx) =>
{
    // ctx.Tarefas.FirstOrDefaultAsync(tarefa => tarefa.Status == "Em andameto");
    // ctx.Tarefas.FirstOrDefaultAsync(tarefa => tarefa.Status == "Não iniciada");
        
    // if(tarefa != null){
    // return Results.Ok(tarefa);
// }
});

//GET: http://localhost:5000/tarefas/concluidas
app.MapGet("/tarefas/concluidas", ([FromServices] AppDataContext ctx) =>
{
    // ctx.Tarefas.FirstOrDefaultAsync(tarefa => tarefa.Status == "Concluída");
        
    // if(tarefa != null){
    //   return Results.Ok(tarefa);
    // }
});

app.UseCors("Acesso Total");
app.Run();