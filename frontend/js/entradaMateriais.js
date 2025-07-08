document.addEventListener('DOMContentLoaded', function() {
    const setorSelect = document.getElementById('setorSelect');
    const commonFields = document.getElementById('commonFields');
    const setorSpecificFields = document.getElementById('setorSpecificFields');
    const entradaMaterialForm = document.getElementById('entradaMaterialForm');

    // Configuration for sector-specific fields
    const specificFieldsConfig = {
        'Administrativo': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Itens Administrativos</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemAdmin" class="form-label">Item:</label>
                        <input type="text" class="form-control" id="itemAdmin" placeholder="Ex: Papel A4, Caneta, Cartucho" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeAdmin" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeAdmin" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeAdmin" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeAdmin" placeholder="Ex: Pacote, Caixa, Unidade" required>
                    </div>
                </div>
            </div>
        `,
        'Almoxarifado': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Itens de Almoxarifado</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemAlmox" class="form-label">Nome do Material/Componente:</label>
                        <input type="text" class="form-control" id="itemAlmox" placeholder="Ex: Parafuso M8, Chapa MDF 15mm" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeAlmox" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeAlmox" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeAlmox" class="form-label">Unidade de Medida:</label>
                        <input type="text" class="form-control" id="unidadeAlmox" placeholder="Ex: Peça, Metro, Placa, Kg" required>
                    </div>
                    <div class="col-md-6">
                        <label for="localizacaoAlmox" class="form-label">Localização no Almoxarifado:</label>
                        <input type="text" class="form-control" id="localizacaoAlmox" placeholder="Ex: Prateleira A1, Corredor 3" required>
                    </div>
                    <div class="col-md-6">
                        <label for="codigoMaterial" class="form-label">Código do Material (se houver):</label>
                        <input type="text" class="form-control" id="codigoMaterial" placeholder="Ex: C00123, P4567">
                    </div>
                </div>
            </div>
        `,
        'Assistência': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Itens de Assistência</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemAssist" class="form-label">Peça/Ferramenta:</label>
                        <input type="text" class="form-control" id="itemAssist" placeholder="Ex: Peça de reposição X, Kit de reparo Y" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeAssist" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeAssist" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeAssist" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeAssist" placeholder="Ex: Unidade, Kit" required>
                    </div>
                    <div class="col-md-6">
                        <label for="equipamentoAssoc" class="form-label">Equipamento Associado (se houver):</label>
                        <input type="text" class="form-control" id="equipamentoAssoc" placeholder="Ex: Máquina de borda modelo Z">
                    </div>
                    <div class="col-md-6">
                        <label for="motivoAssist" class="form-label">Motivo da Entrada:</label>
                        <input type="text" class="form-control" id="motivoAssist" placeholder="Ex: Reposição de estoque, Reparo de cliente">
                    </div>
                </div>
            </div>
        `,
        'Carregamento': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Materiais de Carregamento</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemCarreg" class="form-label">Material:</label>
                        <input type="text" class="form-control" id="itemCarreg" placeholder="Ex: Filme Stretch, Palete, Fita de Arquear" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeCarreg" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeCarreg" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeCarreg" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeCarreg" placeholder="Ex: Rolo, Unidade, Metro" required>
                    </div>
                    <div class="col-12">
                        <label for="tipoCargaCarreg" class="form-label">Tipo de Carga Associada:</label>
                        <input type="text" class="form-control" id="tipoCargaCarreg" placeholder="Ex: Produtos acabados, Matéria-prima">
                    </div>
                </div>
            </div>
        `,
        'Corte': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Materiais de Corte</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemCorte" class="form-label">Chapa/Material Bruto:</label>
                        <input type="text" class="form-control" id="itemCorte" placeholder="Ex: Chapa MDF 18mm Branco, Compensado Naval" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeCorte" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeCorte" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeCorte" class="form-label">Unidade de Medida:</label>
                        <input type="text" class="form-control" id="unidadeCorte" placeholder="Ex: Placa, M², Folha" required>
                    </div>
                    <div class="col-md-6">
                        <label for="dimensoesCorte" class="form-label">Dimensões (se aplicável):</label>
                        <input type="text" class="form-control" id="dimensoesCorte" placeholder="Ex: 2.75x1.83m">
                    </div>
                    <div class="col-md-6">
                        <label for="tipoMaterialCorte" class="form-label">Tipo de Material:</label>
                        <select class="form-select" id="tipoMaterialCorte">
                            <option value="">-- Selecione --</option>
                            <option value="MDF">MDF</option>
                            <option value="Compensado">Compensado</option>
                            <option value="Madeira Maciça">Madeira Maciça</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>
            </div>
        `,
        'Embalagem': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Materiais de Embalagem</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemEmbalagem" class="form-label">Material:</label>
                        <input type="text" class="form-control" id="itemEmbalagem" placeholder="Ex: Caixa de papelão Grande, Plástico bolha, Fita adesiva" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeEmbalagem" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeEmbalagem" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeEmbalagem" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeEmbalagem" placeholder="Ex: Unidade, Rolo, Metro" required>
                    </div>
                    <div class="col-md-6">
                        <label for="tipoEmbalagem" class="form-label">Tipo de Embalagem:</label>
                        <input type="text" class="form-control" id="tipoEmbalagem" placeholder="Ex: Primária, Secundária, Protetiva">
                    </div>
                    <div class="col-md-6">
                        <label for="produtoFinalEmbalagem" class="form-label">Produto Final Associado:</label>
                        <input type="text" class="form-control" id="produtoFinalEmbalagem" placeholder="Ex: Guarda-roupa modulado">
                    </div>
                </div>
            </div>
        `,
        'Manutenção': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Itens de Manutenção</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemManut" class="form-label">Ferramenta/Peça/Insumo:</label>
                        <input type="text" class="form-control" id="itemManut" placeholder="Ex: Chave de fenda, Rolamento X, Óleo hidráulico" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeManut" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeManut" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeManut" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeManut" placeholder="Ex: Unidade, Litro, Kit" required>
                    </div>
                    <div class="col-md-6">
                        <label for="equipamentoManut" class="form-label">Equipamento/Máquina para Manutenção:</label>
                        <input type="text" class="form-control" id="equipamentoManut" placeholder="Ex: Serra circular, Fresadora CNC">
                    </div>
                    <div class="col-md-6">
                        <label for="tipoManut" class="form-label">Tipo de Manutenção:</label>
                        <select class="form-select" id="tipoManut">
                            <option value="">-- Selecione --</option>
                            <option value="Corretiva">Corretiva</option>
                            <option value="Preventiva">Preventiva</option>
                            <option value="Preditiva">Preditiva</option>
                        </select>
                    </div>
                </div>
            </div>
        `,
        'PCP': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Materiais para PCP</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemPCP" class="form-label">Componente/Material:</label>
                        <input type="text" class="form-control" id="itemPCP" placeholder="Ex: Ferragem para gaveta, Dobradiça" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadePCP" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadePCP" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadePCP" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadePCP" placeholder="Ex: Peça, Metro, Conjunto" required>
                    </div>
                    <div class="col-md-6">
                        <label for="ordemProducaoPCP" class="form-label">Ordem de Produção (OP) Associada:</label>
                        <input type="text" class="form-control" id="ordemProducaoPCP" placeholder="Ex: OP-2025-00123">
                    </div>
                    <div class="col-md-6">
                        <label for="produtoPCP" class="form-label">Produto Final Associado:</label>
                        <input type="text" class="form-control" id="produtoPCP" placeholder="Ex: Armário de cozinha modelo X">
                    </div>
                </div>
            </div>
        `,
        'Pintura': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Insumos de Pintura</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemPintura" class="form-label">Tinta/Verniz/Insumo:</label>
                        <input type="text" class="form-control" id="itemPintura" placeholder="Ex: Tinta Acrílica Brilho, Verniz PU, Lixa 120" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadePintura" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadePintura" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadePintura" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadePintura" placeholder="Ex: Litro, Galão, Folha" required>
                    </div>
                    <div class="col-md-6">
                        <label for="corPintura" class="form-label">Cor/Acabamento:</label>
                        <input type="text" class="form-control" id="corPintura" placeholder="Ex: Branco Gelo, Laca Fosca">
                    </div>
                    <div class="col-md-6">
                        <label for="tipoSuperficiePintura" class="form-label">Tipo de Superfície:</label>
                        <input type="text" class="form-control" id="tipoSuperficiePintura" placeholder="Ex: MDF, Madeira, Metal">
                    </div>
                </div>
            </div>
        `,
        'Portaria': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Itens de Portaria</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemPortaria" class="form-label">Item:</label>
                        <input type="text" class="form-control" id="itemPortaria" placeholder="Ex: Livro de Registros, Uniforme, Material de limpeza" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadePortaria" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadePortaria" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadePortaria" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadePortaria" placeholder="Ex: Unidade, Pacote, Litro" required>
                    </div>
                </div>
            </div>
        `,
        'Usinagem': `
            <div class="card p-4 mb-4">
                <h5 class="card-title text-primary mb-3">Ferramentas e Insumos de Usinagem</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="itemUsinagem" class="form-label">Ferramenta/Insumo:</label>
                        <input type="text" class="form-control" id="itemUsinagem" placeholder="Ex: Fresa helicoidal, Broca de 8mm, Óleo de corte" required>
                    </div>
                    <div class="col-md-3">
                        <label for="quantidadeUsinagem" class="form-label">Quantidade:</label>
                        <input type="number" class="form-control" id="quantidadeUsinagem" min="1" value="1" required>
                    </div>
                    <div class="col-md-3">
                        <label for="unidadeUsinagem" class="form-label">Unidade:</label>
                        <input type="text" class="form-control" id="unidadeUsinagem" placeholder="Ex: Unidade, Litro, Conjunto" required>
                    </div>
                    <div class="col-md-6">
                        <label for="tipoFerramentaUsinagem" class="form-label">Tipo de Ferramenta (se aplicável):</label>
                        <input type="text" class="form-control" id="tipoFerramentaUsinagem" placeholder="Ex: Cônica, Reta, Ball Nose">
                    </div>
                    <div class="col-md-6">
                        <label for="maquinaUsinagem" class="form-label">Máquina Associada:</label>
                        <input type="text" class="form-control" id="maquinaUsinagem" placeholder="Ex: Router CNC, Centro de Usinagem">
                    </div>
                </div>
            </div>
        `
    };

    setorSelect.addEventListener('change', function() {
        const selectedSetor = this.value;
        setorSpecificFields.innerHTML = '';

        if (selectedSetor) {
            commonFields.style.display = 'block';
            if (specificFieldsConfig[selectedSetor]) {
                setorSpecificFields.innerHTML = specificFieldsConfig[selectedSetor];
            }
        } else {
            commonFields.style.display = 'none';
        }
    });

    entradaMaterialForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const selectedSetor = setorSelect.value;
        if (!selectedSetor) {
            alert('Por favor, selecione um setor antes de registrar a entrada.');
            return;
        }

        const baseUrl = 'http://localhost:8080/api';

        let endpoint = '';
        let requestBody = {
            idProduto: document.getElementById('idProduto').value,
            dataEntrada: document.getElementById('dataEntrada').value,
            notaFiscal: document.getElementById('notaFiscal').value,
            fornecedor: document.getElementById('fornecedor').value,
            responsavel: document.getElementById('responsavel').value,
        };

        switch (selectedSetor) {
            case 'Administrativo':
                endpoint = `${baseUrl}/administrativo/estoque`;
                requestBody = {
                    ...requestBody,
                    itemAdmin: document.getElementById('itemAdmin').value,
                    quantidadeAdmin: parseInt(document.getElementById('quantidadeAdmin').value),
                    unidadeAdmin: document.getElementById('unidadeAdmin').value
                };
                break;
            case 'Almoxarifado':
                endpoint = `${baseUrl}/almoxarifado/estoque`;
                requestBody = {
                    ...requestBody,
                    itemAlmox: document.getElementById('itemAlmox').value,
                    quantidadeAlmox: parseInt(document.getElementById('quantidadeAlmox').value),
                    unidadeAlmox: document.getElementById('unidadeAlmox').value,
                    localizacaoAlmox: document.getElementById('localizacaoAlmox').value,
                    codigoMaterial: document.getElementById('codigoMaterial').value
                };
                break;
            case 'Assistência':
                endpoint = `${baseUrl}/assistencia/estoque`;
                requestBody = {
                    ...requestBody,
                    itemAssist: document.getElementById('itemAssist').value,
                    quantidadeAssist: parseInt(document.getElementById('quantidadeAssist').value),
                    unidadeAssist: document.getElementById('unidadeAssist').value,
                    equipamentoAssoc: document.getElementById('equipamentoAssoc').value,
                    motivoAssist: document.getElementById('motivoAssist').value
                };
                break;
            case 'Carregamento':
                endpoint = `${baseUrl}/carregamento/estoque`;
                requestBody = {
                    ...requestBody,
                    itemCarreg: document.getElementById('itemCarreg').value,
                    quantidadeCarreg: parseInt(document.getElementById('quantidadeCarreg').value),
                    unidadeCarreg: document.getElementById('unidadeCarreg').value,
                    tipoCargaCarreg: document.getElementById('tipoCargaCarreg').value
                };
                break;
            case 'Corte':
                endpoint = `${baseUrl}/corte/estoque`;
                requestBody = {
                    ...requestBody,
                    itemCorte: document.getElementById('itemCorte').value,
                    quantidadeCorte: parseInt(document.getElementById('quantidadeCorte').value),
                    unidadeCorte: document.getElementById('unidadeCorte').value,
                    dimensoesCorte: document.getElementById('dimensoesCorte').value,
                    tipoMaterialCorte: document.getElementById('tipoMaterialCorte').value
                };
                break;
            case 'Embalagem':
                endpoint = `${baseUrl}/embalagem/estoque`;
                requestBody = {
                    ...requestBody,
                    itemEmbalagem: document.getElementById('itemEmbalagem').value,
                    quantidadeEmbalagem: parseInt(document.getElementById('quantidadeEmbalagem').value),
                    unidadeEmbalagem: document.getElementById('unidadeEmbalagem').value,
                    tipoEmbalagem: document.getElementById('tipoEmbalagem').value,
                    produtoFinalEmbalagem: document.getElementById('produtoFinalEmbalagem').value
                };
                break;
            case 'Manutenção':
                endpoint = `${baseUrl}/manutencao/estoque`;
                requestBody = {
                    ...requestBody,
                    itemManut: document.getElementById('itemManut').value,
                    quantidadeManut: parseInt(document.getElementById('quantidadeManut').value),
                    unidadeManut: document.getElementById('unidadeManut').value,
                    equipamentoManut: document.getElementById('equipamentoManut').value,
                    tipoManut: document.getElementById('tipoManut').value
                };
                break;
            case 'PCP':
                endpoint = `${baseUrl}/pcp/estoque`;
                requestBody = {
                    ...requestBody,
                    itemPCP: document.getElementById('itemPCP').value,
                    quantidadePCP: parseInt(document.getElementById('quantidadePCP').value),
                    unidadePCP: document.getElementById('unidadePCP').value,
                    ordemProducaoPCP: document.getElementById('ordemProducaoPCP').value,
                    produtoPCP: document.getElementById('produtoPCP').value
                };
                break;
            case 'Pintura':
                endpoint = `${baseUrl}/pintura/estoque`;
                requestBody = {
                    ...requestBody,
                    itemPintura: document.getElementById('itemPintura').value,
                    quantidadePintura: parseInt(document.getElementById('quantidadePintura').value),
                    unidadePintura: document.getElementById('unidadePintura').value,
                    corPintura: document.getElementById('corPintura').value,
                    tipoSuperficiePintura: document.getElementById('tipoSuperficiePintura').value
                };
                break;
            case 'Portaria':
                endpoint = `${baseUrl}/portaria/estoque`;
                requestBody = {
                    ...requestBody,
                    itemPortaria: document.getElementById('itemPortaria').value,
                    quantidadePortaria: parseInt(document.getElementById('quantidadePortaria').value),
                    unidadePortaria: document.getElementById('unidadePortaria').value
                };
                break;
            case 'Usinagem':
                endpoint = `${baseUrl}/usinagem/estoque`;
                requestBody = {
                    ...requestBody,
                    itemUsinagem: document.getElementById('itemUsinagem').value,
                    quantidadeUsinagem: parseInt(document.getElementById('quantidadeUsinagem').value),
                    unidadeUsinagem: document.getElementById('unidadeUsinagem').value,
                    tipoFerramentaUsinagem: document.getElementById('tipoFerramentaUsinagem').value,
                    maquinaUsinagem: document.getElementById('maquinaUsinagem').value
                };
                break;
            default:
                alert('Erro: Setor selecionado inválido.');
                return;
        }

        console.log('Dados do Formulário para envio:', baseUrl);

        

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro do servidor: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Sucesso:', data);
            alert('Entrada registrada com sucesso!');
            entradaMaterialForm.reset();
            setorSpecificFields.innerHTML = '';
            commonFields.style.display = 'none';
        } catch (error) {
            console.error('Erro:', error);
            alert(`Erro ao registrar entrada: ${error.message}. Verifique o console para mais detalhes.`);
        }
        console.log(requestBody);
    });
});