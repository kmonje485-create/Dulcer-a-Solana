import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

describe("dulceria", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Dulceria;

  it("Crear dulce", async () => {

    const dulce = anchor.web3.Keypair.generate();

    await program.methods
      .crearDulce("Gomitas", 5, 200)
      .accounts({
        dulce: dulce.publicKey,
        usuario: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([dulce])
      .rpc();

    const cuenta = await program.account.dulce.fetch(dulce.publicKey);

    console.log(cuenta);
  });

});
