package com.aramoveis.aramoveis.controller;

import com.aramoveis.aramoveis.model.ItemAdministrativo;
import com.aramoveis.aramoveis.service.ItemAdministrativoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/administrativo/todos")
    public ResponseEntity<List<ItemAdministrativo>> buscarTodosItems() {
        List<ItemAdministrativo> itens = itemAdministrativoService.buscarItens();
        return ResponseEntity.ok(itens);
    }
}
