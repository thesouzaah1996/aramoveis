package com.aramoveis.aramoveis.controller;

import com.aramoveis.aramoveis.dto.UsuarioRequest;
import com.aramoveis.aramoveis.model.Usuario;
import com.aramoveis.aramoveis.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> cadastrar(@Valid @RequestBody UsuarioRequest request) {
        Usuario usuario = usuarioService.cadastrar(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário criado com sucesso");
    }
}
