import { db, ref, get, child, update } from "../firebase/firebase-config.js";

async function carregarLista() {
  const dbRef = ref(db);

  try {
    const snapshot = await get(child(dbRef, "presentes"));

    if (snapshot.exists()) {
      const lista = snapshot.val();
      const listaElement = document.getElementById("lista-presentes");
      listaElement.innerHTML = "";

      for (const key in lista) {
        if (lista.hasOwnProperty(key)) {
          const item = lista[key];

        
          const listItem = document.createElement("li");
          listItem.textContent = `${item.nome} -  ${item.disponivel ? 'Disponível' : 'Indisponível'}`;

          if (item.disponivel) {
            const button = document.createElement("button");
            button.textContent = "Reservar";
            button.onclick = () => reservarItem(key, item.nome);
            listItem.appendChild(button);
          } else {
            listItem.style.color = "#A9A9A9";
            const liberarButton = document.createElement("button");
            liberarButton.textContent = "Liberar";
            liberarButton.onclick = () => liberarItem(key);
            listItem.appendChild(liberarButton);
          }

          listaElement.appendChild(listItem);
        }
      }
    } else {
      console.log("❌ Nenhum dado encontrado.");
    }
  } catch (error) {
    console.error("❌ Erro ao buscar dados: ", error);
  }
}

async function reservarItem(id, nome) {
  const nomeReservado = prompt(`Digite o seu nome para reservar o item: ${nome}`);

  if (nomeReservado) {
    try {
      const itemRef = ref(db, `presentes/${id}`);
      await update(itemRef, {
        disponivel: false,
        reservadoPor: nomeReservado,
      });
      alert(`${nome} reservado com sucesso!`);
      carregarLista(); 
    } catch (error) {
      console.error("Erro ao reservar o item:", error);
    }
  }
}
async function liberarItem(id, reservadoPor) {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `presentes/${id}`));
    if (snapshot.exists()) {
      const item = snapshot.val();
      console.log("🔍 Valor no Firebase:", item);

      const nomeConfirmado = prompt(`Digite o seu nome para liberar o item:`).trim();

      console.log(`Nome digitado pelo usuário: [${nomeConfirmado}]`);
      console.log(`Nome armazenado no Firebase: [${item.reservadoPor}]`);

      if (nomeConfirmado === item.reservadoPor) {
        const itemRef = ref(db, `presentes/${id}`);
        await update(itemRef, {
          disponivel: true,
          reservadoPor: null,
        });
        alert("Item liberado com sucesso!");
        carregarLista();
      } else {
        alert("❌ Nome incorreto! Apenas quem reservou pode liberar o item.");
      }
    } else {
      alert("❌ Item não encontrado no banco de dados.");
    }
  } catch (error) {
    console.error("Erro ao liberar o item:", error);
  }
}

carregarLista();
