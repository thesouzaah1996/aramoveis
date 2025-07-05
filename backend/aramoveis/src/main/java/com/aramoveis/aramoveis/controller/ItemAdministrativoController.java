package com.aramoveis.aramoveis.controller;

import com.aramoveis.aramoveis.model.ItemAdministrativo;
import com.aramoveis.aramoveis.service.ItemAdministrativoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ItemAdministrativoController {

    @Autowired
    private ItemAdministrativoService itemAdministrativoService;

    @PostMapping("/administrativo/estoque")
    public ResponseEntity<ItemAdministrativo> addItemAdministrativo(
            @Valid @RequestBody ItemAdministrativo itemAdministrativo) {
        ItemAdministrativo novoItem = itemAdministrativoService.addItem(itemAdministrativo);

        return ResponseEntity.status(HttpStatus.CREATED).body(novoItem);
    }
}
