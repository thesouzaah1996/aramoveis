package com.aramoveis.almoxarifado.repository;

import com.aramoveis.almoxarifado.model.ItemPintura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPinturaRepository extends JpaRepository<ItemPintura, Long> {
}
