package com.aramoveis.almoxarifado.service;

import com.aramoveis.almoxarifado.model.ItemPintura;
import com.aramoveis.almoxarifado.repository.ItemPinturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemPinturaService {

    @Autowired
    private ItemPinturaRepository itemPinturaRepository;

    public ItemPintura registrarItemPintura(ItemPintura itemPintura) {
        return itemPinturaRepository.save(itemPintura);
    }
}
