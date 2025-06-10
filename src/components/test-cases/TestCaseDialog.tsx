
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface TestCaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testCase?: any;
  onSave: (testCase: any) => void;
}

export function TestCaseDialog({ open, onOpenChange, testCase, onSave }: TestCaseDialogProps) {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      title: testCase?.title || '',
      description: testCase?.description || '',
      type: testCase?.type || 'Functional',
      priority: testCase?.priority || 'Medium',
      status: testCase?.status || 'Draft',
      assignedTo: testCase?.assignedTo || '',
      estimatedTime: testCase?.estimatedTime || '',
      category: testCase?.category || '',
      environment: testCase?.environment || '',
      testData: testCase?.testData || '',
      expectedResult: testCase?.expectedResult || '',
      tags: testCase?.tags?.join(', ') || '',
      steps: testCase?.steps?.join('\n') || ''
    }
  });

  React.useEffect(() => {
    if (testCase) {
      form.reset({
        title: testCase.title || '',
        description: testCase.description || '',
        type: testCase.type || 'Functional',
        priority: testCase.priority || 'Medium',
        status: testCase.status || 'Draft',
        assignedTo: testCase.assignedTo || '',
        estimatedTime: testCase.estimatedTime || '',
        category: testCase.category || '',
        environment: testCase.environment || '',
        testData: testCase.testData || '',
        expectedResult: testCase.expectedResult || '',
        tags: testCase.tags?.join(', ') || '',
        steps: testCase.steps?.join('\n') || ''
      });
    } else {
      form.reset({
        title: '',
        description: '',
        type: 'Functional',
        priority: 'Medium',
        status: 'Draft',
        assignedTo: '',
        estimatedTime: '',
        category: '',
        environment: '',
        testData: '',
        expectedResult: '',
        tags: '',
        steps: ''
      });
    }
  }, [testCase, form]);

  const handleSubmit = (data: any) => {
    const processedData = {
      ...data,
      tags: data.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean),
      steps: data.steps.split('\n').filter(Boolean),
      createdDate: testCase?.createdDate || new Date().toISOString().split('T')[0],
      lastModified: new Date().toISOString().split('T')[0],
      actualTime: testCase?.actualTime || ''
    };

    onSave(processedData);
    onOpenChange(false);
    form.reset();

    toast({
      title: testCase ? "Test Case Updated" : "Test Case Created",
      description: testCase ? "Test case has been updated successfully." : "New test case has been created successfully.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{testCase ? 'Edit Test Case' : 'Create New Test Case'}</DialogTitle>
          <DialogDescription>
            {testCase ? 'Update the test case details below.' : 'Fill in the details to create a new test case.'}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter test case title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Functional">Functional</SelectItem>
                        <SelectItem value="Performance">Performance</SelectItem>
                        <SelectItem value="API">API</SelectItem>
                        <SelectItem value="Security">Security</SelectItem>
                        <SelectItem value="UI/UX">UI/UX</SelectItem>
                        <SelectItem value="Integration">Integration</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter test case description" 
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Critical">Critical</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estimatedTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Time</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 30 minutes" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned To</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter assignee name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Authentication" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="environment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Environment</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Chrome Browser, Windows 10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="testData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Data</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter test data requirements" 
                      className="min-h-[60px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectedResult"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Result</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter expected test result" 
                      className="min-h-[60px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="steps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Steps</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter test steps (one per line)" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1">
                {testCase ? 'Update Test Case' : 'Create Test Case'}
              </Button>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
