package com.aramoveis.almoxarifado.service;

import com.aramoveis.almoxarifado.model.ItemAdministrativo;
import com.aramoveis.almoxarifado.repository.ItemAdministrativoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemAdministrativoService {

    @Autowired
    private ItemAdministrativoRepository itemAdministrativoRepository;

    public ItemAdministrativo registrarItemAdministrativo(ItemAdministrativo itemAdministrativo) {
        return itemAdministrativoRepository.save(itemAdministrativo);
    }
}
