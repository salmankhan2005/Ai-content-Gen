"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AIModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      // Await text extraction
      const aiResponse = await result.response.text();
      setAiOutput(aiResponse);

      console.log(aiResponse);

      // Save to DB
      await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponse);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: any, aiOutput: string) => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress || "Unknown User"; // Extract email as a string
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiOutput,
        createdBy: email, // Use the extracted email
        createdAt: moment().format("DD/MM/yyyy"),
      });
      console.log(result);
    } catch (error) {
      console.error("Error saving in DB:", error);
    }
  };

  return (
    <div className="p-15">
      <Link href={"/dashboard"}>
        <Button className="ml-10 mt-5">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ml-10 mt-6 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
