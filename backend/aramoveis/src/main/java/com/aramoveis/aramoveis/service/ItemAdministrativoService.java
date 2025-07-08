package com.aramoveis.aramoveis.service;

import com.aramoveis.aramoveis.model.ItemAdministrativo;
import com.aramoveis.aramoveis.repository.ItemAdministrativoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemAdministrativoService {

    @Autowired
    private ItemAdministrativoRepository itemAdministrativoRepository;

    public ItemAdministrativo addItem(ItemAdministrativo itemAdministrativo) {
        return itemAdministrativoRepository.save(itemAdministrativo);
    }

    public List<ItemAdministrativo> buscarItens() {
        return itemAdministrativoRepository.findAll();
    }
}
