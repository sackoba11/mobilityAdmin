/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import AppColors from "../Common/Theme/Colors";
type Data = {
  id: any;
  resetOnDelete?: () => void;
  deleteFunction?:(id:string)=>Promise<void>
};

export const CustomAlertDialog = ({ id, resetOnDelete, deleteFunction }: Data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resetOnDelete!();
  }, [loading]);

  const toast = useToast({
    position: "top",
    title: "Container style is updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  const OnDeleteAction = async () => {
    setLoading(true);
    try {
      await deleteFunction!(id);
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Suppression",
        description: "Erreur lors de la suppression.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }
  };
  return (
    <>
      <DeleteIcon
        cursor={"pointer"}
        style={{ fontSize: "20px", color: AppColors.erro }}
        onClick={onOpen}
      />
      {
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Suppression
              </AlertDialogHeader>

              <AlertDialogBody>
                Êtes-vous sûr de vouloir supprimer cette gare ?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Annuler
                </Button>
                {loading == true ? (
                  <Spinner
                    ml={3}
                    size={"lg"}
                    marginLeft={"5%"}
                    marginRight={"5%"}
                  />
                ) : (
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      OnDeleteAction();
                      toast({
                        title: "Suppression",
                        description: "Suppression réussie avec succès.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                      onClose();
                    }}
                    ml={3}
                  >
                    Supprimer
                  </Button>
                )}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      }
    </>
  );
};
