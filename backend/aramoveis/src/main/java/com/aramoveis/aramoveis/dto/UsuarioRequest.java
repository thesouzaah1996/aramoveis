package com.aramoveis.aramoveis.dto;

import com.aramoveis.aramoveis.model.Perfil;
import com.aramoveis.aramoveis.model.Setor;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UsuarioRequest {

    @NotBlank
    private String nome;

    @NotBlank
    private String username;

    @NotBlank
    private String senha;

    @NotNull
    private Setor setor;

    @NotNull
    private Perfil perfil;
}
