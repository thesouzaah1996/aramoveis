package com.aramoveis.aramoveis.service;

import com.aramoveis.aramoveis.dto.UsuarioRequest;
import com.aramoveis.aramoveis.model.Usuario;
import com.aramoveis.aramoveis.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario cadastrar(UsuarioRequest request) {
        if (usuarioRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username já cadastrado!");
        }

        Usuario usuario = new Usuario();
        usuario.setNome(request.getUsername());
        usuario.setUsername(request.getUsername());
        usuario.setSenha(passwordEncoder.encode(request.getSenha()));
        usuario.setSetor(request.getSetor());
        usuario.setPerfil(request.getPerfil());

        return usuarioRepository.save(usuario);
    }
}
